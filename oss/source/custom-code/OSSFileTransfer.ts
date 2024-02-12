import { AdskEnvironment, IAuthClient, SdkManagerBuilder, SDKManager, ApiResponse, ApsServiceRequestConfig } from "@aps_sdk/autodesk-sdkmanager";
import { IFileTransferConfigurations } from './FileTransferConfigurations';
import { OSSApi } from "../api";
import { Completes3uploadBody, ObjectStatusEnum, Signeds3downloadResponse, Signeds3uploadResponse } from "../model";
import { OssApiError, RequestArgs } from "../base";
import {createRequestFunctionOss } from "../common";
import { WriteStream, createWriteStream } from "fs";
import axios, { AxiosResponse } from "axios";


 export interface IOSSFileTransfer {
 }
class Constants {
  public static readonly MaxRetry: number = 5;
  public static readonly ChunkSize: number = 5 * 1024 * 1024;
  public static readonly BatchSize: number = 25;
}
export class OSSFileTransfer implements IOSSFileTransfer {

  public configuration: IFileTransferConfigurations;
  public ossApi: OSSApi;
  public authentication: IAuthClient;

  private maxRetryOnTokenExpiry: number;
  private maxChunkCountAllowed: number;
  private maxRetryOnUrlExpiry: number;
  public sdkManager: SDKManager;
  private logger;

  private readonly accessTokenExpiredMessage: string = 'Access token provided is invalid or expired.';
  private readonly forbiddenMessage: string = '403 (Forbidden)';

  constructor(
    configuration: IFileTransferConfigurations,
    sdkmanager: SDKManager
  ) {

    this.sdkManager = sdkmanager;
    this.configuration = configuration;
    this.ossApi = new OSSApi(this.sdkManager);
    this.maxChunkCountAllowed = this.configuration.GetMaxChunkCountAllowed();
    this.maxRetryOnUrlExpiry = this.configuration.GetMaxRetryOnUrlExpiry();
    this.maxRetryOnTokenExpiry = this.configuration.GetMaxRetryOnTokenExpiry();
    // this._authentication = authentication;
    this.logger = this.sdkManager.logger;
  }

  public async Upload(bucketKey: string, objectKey: string, sourceToUpload: Buffer, accessToken: string, cancellationToken: AbortController, projectScope: string = '',
    requestIdPrefix: string = '', onProgress?: (percentCompleted: number) => void): Promise<ApiResponse> {
    const requestId: any = await this.HandleRequestId(requestIdPrefix, bucketKey, objectKey);
    const retryCount: number = this.configuration.GetRetryCount();
    this.logger.logDebug(`${requestId} Config retry setting was: ${retryCount}`);

    await this.ValidateFileSize(requestId, sourceToUpload);
    this.ValidateProjectScopeName(requestId, projectScope);

    onProgress?.(1);
    var numberOfChunks: number = this.CalculateNumberOfChunks(sourceToUpload.length);
    var chunksUploaded: number = 0;

    //Need keep check start and end chuk size data type that it should bigint as in dotnet it is long 
    var start: number = 0;
    var uploadUrls: string[] = [];
    var uploadKey: string = null;
    while (chunksUploaded < numberOfChunks) {
      this.ThrowIfCancellationRequested(cancellationToken, requestId);
      var attempts: number =  0;
      var end: number = Math.min(start + Constants.ChunkSize, sourceToUpload.length);
      var fileBuffer: Buffer = this.readFileBytes(sourceToUpload, start, end);
      // console.log(fileBuffer.length);
      var retryUrlExpiryCount: number = 0;
      while (true) {
        this.ThrowIfCancellationRequested(cancellationToken, requestId);
        attempts++;
        this.logger.logInfo(`${requestId} Uploading part ${chunksUploaded}, attempt ${attempts}`);

        if (uploadUrls.length == 0) {
          retryUrlExpiryCount++;
          var [uploadUrlsResponse, currentAccessToken] = await this.GetUploadUrlsWithRetry(bucketKey, objectKey, numberOfChunks, chunksUploaded, uploadKey, accessToken, projectScope, requestId);
          uploadKey = uploadUrlsResponse.uploadKey;
          uploadUrls = uploadUrlsResponse.urls;
          accessToken = currentAccessToken;
        }
        var currentUrl:string = uploadUrls.shift();
        try {
          this.ThrowIfCancellationRequested(cancellationToken, requestId);
          var responseBuffer = await this.UploadToURL(currentUrl, fileBuffer, accessToken,requestId);
          // console.log(responseBuffer.headers.etag);
          var statusCode: number = responseBuffer.status;

          //Httpstatus Code Forbiden is deprecated so uing 403 
          if (statusCode === 403 && retryUrlExpiryCount === this.maxRetryOnUrlExpiry) {
            this.logger.logInfo(`${requestId} URL can not be refreshed.`);
            throw new OssApiError(`${statusCode} URL can not be refreshed`);
          }
          if (statusCode == 403) {
            this.logger.logInfo(`${requestId} 403, refreshing urls, attempt: ${retryUrlExpiryCount}`);
            uploadUrls = [];
            continue;
          }
          break;
        } catch (error) {
          this.logger.logError(error.message);
          if (attempts == Constants.MaxRetry) {
            this.logger.logError(`${requestId} Couldn't upload chunk after max retry of ${Constants.MaxRetry}`);
            throw new OssApiError(`${requestId} ${error.Message}`);
          }
        }
      }
      chunksUploaded++;
      start =end+1;
      var percentCompleted: number = (chunksUploaded / numberOfChunks) * 100;
      onProgress?.(percentCompleted);
      this.logger.logInfo(`${requestId} Number of chunks uploaded : ${chunksUploaded}`);
    }
    var completeResponse = await this.ossApi.completeSignedS3Upload(
      accessToken,
      bucketKey,
      objectKey,
      "application/json",
      {
        uploadKey: uploadKey
      } as Completes3uploadBody);
    onProgress?.(100);
    return completeResponse;
  }
  protected async UploadToURL(currentUrl: string, fileChunk: Buffer, accessToken: string, requestId:string,options?: ApsServiceRequestConfig): Promise<any> {
    const localVarHeaderParameter = {} as any;
    localVarHeaderParameter['x-ads-request-id'] = requestId;
    const localVarRequestOptions = { method: 'PUT', ...options };
    localVarRequestOptions.headers = { ...localVarHeaderParameter };
    localVarRequestOptions.data = fileChunk;
    const localVarAxiosArgs: RequestArgs = {
      url: currentUrl,
      options: localVarRequestOptions
    }
    const request: () => Promise<AxiosResponse> = createRequestFunctionOss(localVarAxiosArgs, this.sdkManager);
    const response = await request();
    return response;
  }
  public async Download(bucketKey: string, objectKey: string, filePath: string, accessToken: string, cancellationToken: AbortController, projectScope: string = '', requestIdPrefix: string = '', onProgress?: (percentCompleted: number) => void): Promise<void> {
    var requestId: any = await this.HandleRequestId(requestIdPrefix, bucketKey, objectKey);
    this.ValidateProjectScopeName(requestId, projectScope);

    onProgress?.(1);
    const response: Signeds3downloadResponse = await this.GetS3SignedDownloadUrlWithRetry(bucketKey, objectKey, accessToken, requestId, projectScope);
    const fileSize = response.size;
    const numberOfChunks: number = this.CalculateNumberOfChunks(fileSize);
    var partsDownloaded: number = 0;
    var start: number = 0
    const fileStream = createWriteStream(filePath, { flags: 'a' });
    while (partsDownloaded < numberOfChunks) {
      this.logger.logInfo(`${requestId} Downloading part: ${partsDownloaded}`);
      var end: number = Math.min((partsDownloaded + 1) * Constants.ChunkSize, fileSize.valueOf());
      if (start == end) {
        break;
      }
      var attemptCount = 0;
      while (attemptCount < this.maxRetryOnUrlExpiry) {
        try {
          attemptCount++;
          this.logger.logInfo(`${requestId} Downloading file range : ${start - end}`);
          await this.writeToFileStreamFromUrl(fileStream, response.url, start, end, requestId);
          start = end + 1;
          partsDownloaded++;
          const percentCompleted = Math.floor((partsDownloaded / numberOfChunks) * 100);
          onProgress?.(percentCompleted);
          break;
        } catch (error) {

        }
      }
    }
    fileStream.end();
  }
  private async isFileSizeAllowed(file: Buffer): Promise<boolean> {

    const fileSize: number = file.length;
    const numberOfChunks: number = this.CalculateNumberOfChunks(fileSize);
    if (numberOfChunks > this.maxChunkCountAllowed) {
      return false;
    }
    return true;

  }
  private readFileBytes(file: Buffer, start: number, end: number): Buffer {
    const fileReader = file.subarray(start, end);
    return fileReader;
  }
  private async GetUploadUrlsWithRetry(bucketKey: string, objectKey: string, numberOfChunks: number, chunksUploaded: number, uploadKey: string, accessToken: string, projectScope: string, requestId: string): Promise<[Signeds3uploadResponse, string]> {

    var attemptcount: number = 0;
    var parts: number = (Math.min(numberOfChunks - chunksUploaded, Constants.BatchSize));
    var firstPart = chunksUploaded + 1;

    do {
      this.logger.logInfo(`${requestId} Refreshing URL attempt:${attemptcount}.`);
      try {

        var response = await this.ossApi.signedS3Upload(accessToken, bucketKey, objectKey, projectScope, parts, firstPart, uploadKey);
        return ([response.content, accessToken]);

      } catch (e) {
        if (e.message.includes(this.accessTokenExpiredMessage)) {

          attemptcount++;
          accessToken = this.authentication.getUpdatedAccessToken();

          this.logger.logInfo(`${requestId} Token expired. Trying to refresh`);
        }
        else {
          this.logger.logInfo(`${requestId} Error: ${e.message}`);
          throw e;
        }
      }
    } while (attemptcount < this.maxRetryOnTokenExpiry);
    throw new OssApiError(`${requestId} Error: Fail getting upload urls after maximum retry`);
  }
  private CalculateNumberOfChunks(fileSize: number): number {
    if (fileSize == 0) {
      return 1;
    }
    var numberOfChunks: number = Math.trunc(fileSize / Constants.ChunkSize);

    if (fileSize % Constants.ChunkSize != 0) {

      numberOfChunks++;
    }
    return numberOfChunks;
  }
  private async ValidateFileSize(requestId: string, sourceToUpload: Buffer) {
    var sizeAllowed = await this.isFileSizeAllowed(sourceToUpload);
    if (!sizeAllowed) {
      throw new OssApiError(`${requestId} File size too big to upload. Currently max file size allowed is ${Number(this.maxChunkCountAllowed) * Number(Constants.ChunkSize)} bytes`);
    }
  }
  protected async WriteToFileStreamFromUrl(fileStream: File, contentUrl: string, start: number, end: number, requestId: string): Promise<void> {
    //  .Add("Range", "bytes=" + start + "-" + end);
    // var streamAsync = _forgeService.Client.GetByteArrayAsync(contentUrl);
    // _forgeService.Client.DefaultRequestHeaders.Remove("Range");
    // var available = streamAsync.Result.Length;
    // await fileStream.WriteAsync(streamAsync.Result, 0, available);
  }
  private async HandleRequestId(parentRequestId: string, bucketKey: string, objectKey: string): Promise<string> {
    var requestId: string = parentRequestId && parentRequestId.trim() != "" ? parentRequestId : String(Math.random());
    requestId = requestId + ":" + this.GenerateSdkRequestId(bucketKey, objectKey);
    // const localVarHeaderParameter = {} as any;
    // localVarHeaderParameter['x-ads-request-id'] = requestId;
    // const localVarRequestOptions = {} as any;
    // localVarRequestOptions.headers = { ...localVarHeaderParameter };
    // createRequestFunction(localVarRequestOptions, this.sdkManager);
    return requestId;
  }
  private GenerateSdkRequestId(bucketKey: string, objectKey: string): string {
    return bucketKey + "/" + objectKey;
  }
  private async GetS3SignedDownloadUrlWithRetry(bucketKey: string, objectKey: string, accessToken: string, requestId: string, projectScope: string): Promise<Signeds3downloadResponse> {
    var attemptCount: number = 0;
    do {
      this.logger.logInfo(`${requestId} Get signed URL to download directly from S3 attempt: ${attemptCount}`);

      try {
        var objectStatusEnumString: string = ObjectStatusEnum.Complete;
        var response = await this.ossApi.signedS3Download(accessToken, bucketKey, objectKey, projectScope);
        if (response.content.status != objectStatusEnumString) {
          this.logger.logError(`${requestId} File not available for download yet.`);
          throw new OssApiError(`${requestId} File not available for download yet.`);
        }
        return response.content;
      } catch (error) {
        if (error.Message.Contains(this.accessTokenExpiredMessage)) {
          attemptCount++;
          accessToken = this.authentication.getUpdatedAccessToken();
          this.logger.logInfo(`${requestId} Token expired. Trying to refresh`);
        }
        else {
          this.logger.logError(`${requestId} Error: ${error.Message}`);
          throw error;
        }
      }

    } while (attemptCount < this.maxRetryOnTokenExpiry);

    throw new OssApiError(`${requestId} Error: Fail getting upload urls after maximum retry`);
  }
  private ValidateProjectScopeName(requestId: string, projectScope: string) {
    const scopeRegex: RegExp = /^([a-zA-Z0-9.\\-_]{3,50}(,?)){1,20}$/;
    if (!(projectScope === '' || scopeRegex.test(projectScope))) {
      throw new OssApiError(`${requestId} Parameter 'projectScope' doesn't pass regex test - user must submit a valid scope.`);
    }
  }
  private ThrowIfCancellationRequested(cancellationToken: AbortController, requestId: string) {
    if (cancellationToken.signal.aborted) {
      this.logger.logInfo("${requestId} Cancellation requested.");
      cancellationToken.signal.throwIfAborted();
    }
  }
  protected async writeToFileStreamFromUrl(fileStream: WriteStream, url: string, start: number, end: number, requestId: any) {
    const localVarHeaderParameter = {} as any;
    const rangeHeaderValue = `bytes=${start}-${end}`;
    localVarHeaderParameter['Range'] = String(rangeHeaderValue);
    const response = await axios.get(url, {
      headers: {
        Range: rangeHeaderValue,
      },
      responseType: 'arraybuffer',
    });
    const data = response.data as ArrayBuffer;
    const chunk = Buffer.from(data);
    await this.writeStreamAsync(fileStream, chunk);
    console.log(`${requestId} Successfully downloaded file range: ${start} - ${end}`);


  }
  protected async writeStreamAsync(stream: NodeJS.WritableStream, chunk: Buffer): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      stream.write(chunk, (error: Error | null) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }


}


