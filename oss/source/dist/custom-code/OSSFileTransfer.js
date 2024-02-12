"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSSFileTransfer = void 0;
const api_1 = require("../api");
const model_1 = require("../model");
const base_1 = require("../base");
const common_1 = require("../common");
const fs_1 = require("fs");
const axios_1 = require("axios");
class Constants {
}
Constants.MaxRetry = 5;
Constants.ChunkSize = 5 * 1024 * 1024;
Constants.BatchSize = 25;
class OSSFileTransfer {
    constructor(configuration, sdkmanager) {
        this.accessTokenExpiredMessage = 'Access token provided is invalid or expired.';
        this.forbiddenMessage = '403 (Forbidden)';
        this.sdkManager = sdkmanager;
        this.configuration = configuration;
        this.ossApi = new api_1.OSSApi(this.sdkManager);
        this.maxChunkCountAllowed = this.configuration.GetMaxChunkCountAllowed();
        this.maxRetryOnUrlExpiry = this.configuration.GetMaxRetryOnUrlExpiry();
        this.maxRetryOnTokenExpiry = this.configuration.GetMaxRetryOnTokenExpiry();
        // this._authentication = authentication;
        this.logger = this.sdkManager.logger;
    }
    Upload(bucketKey, objectKey, sourceToUpload, accessToken, cancellationToken, projectScope = '', requestIdPrefix = '', onProgress) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestId = yield this.HandleRequestId(requestIdPrefix, bucketKey, objectKey);
            const retryCount = this.configuration.GetRetryCount();
            this.logger.logDebug(`${requestId} Config retry setting was: ${retryCount}`);
            yield this.ValidateFileSize(requestId, sourceToUpload);
            this.ValidateProjectScopeName(requestId, projectScope);
            onProgress === null || onProgress === void 0 ? void 0 : onProgress(1);
            var numberOfChunks = this.CalculateNumberOfChunks(sourceToUpload.length);
            var chunksUploaded = 0;
            //Need keep check start and end chuk size data type that it should bigint as in dotnet it is long 
            var start = 0;
            var uploadUrls = [];
            var uploadKey = null;
            while (chunksUploaded < numberOfChunks) {
                this.ThrowIfCancellationRequested(cancellationToken, requestId);
                var attempts = 0;
                var end = Math.min(start + Constants.ChunkSize, sourceToUpload.length);
                var fileBuffer = this.readFileBytes(sourceToUpload, start, end);
                // console.log(fileBuffer.length);
                var retryUrlExpiryCount = 0;
                while (true) {
                    this.ThrowIfCancellationRequested(cancellationToken, requestId);
                    attempts++;
                    this.logger.logInfo(`${requestId} Uploading part ${chunksUploaded}, attempt ${attempts}`);
                    if (uploadUrls.length == 0) {
                        retryUrlExpiryCount++;
                        var [uploadUrlsResponse, currentAccessToken] = yield this.GetUploadUrlsWithRetry(bucketKey, objectKey, numberOfChunks, chunksUploaded, uploadKey, accessToken, projectScope, requestId);
                        uploadKey = uploadUrlsResponse.uploadKey;
                        uploadUrls = uploadUrlsResponse.urls;
                        accessToken = currentAccessToken;
                    }
                    var currentUrl = uploadUrls.shift();
                    try {
                        this.ThrowIfCancellationRequested(cancellationToken, requestId);
                        var responseBuffer = yield this.UploadToURL(currentUrl, fileBuffer, accessToken, requestId);
                        // console.log(responseBuffer.headers.etag);
                        var statusCode = responseBuffer.status;
                        //Httpstatus Code Forbiden is deprecated so uing 403 
                        if (statusCode === 403 && retryUrlExpiryCount === this.maxRetryOnUrlExpiry) {
                            this.logger.logInfo(`${requestId} URL can not be refreshed.`);
                            throw new base_1.OssApiError(`${statusCode} URL can not be refreshed`);
                        }
                        if (statusCode == 403) {
                            this.logger.logInfo(`${requestId} 403, refreshing urls, attempt: ${retryUrlExpiryCount}`);
                            uploadUrls = [];
                            continue;
                        }
                        break;
                    }
                    catch (error) {
                        this.logger.logError(error.message);
                        if (attempts == Constants.MaxRetry) {
                            this.logger.logError(`${requestId} Couldn't upload chunk after max retry of ${Constants.MaxRetry}`);
                            throw new base_1.OssApiError(`${requestId} ${error.Message}`);
                        }
                    }
                }
                chunksUploaded++;
                start = end + 1;
                var percentCompleted = (chunksUploaded / numberOfChunks) * 100;
                onProgress === null || onProgress === void 0 ? void 0 : onProgress(percentCompleted);
                this.logger.logInfo(`${requestId} Number of chunks uploaded : ${chunksUploaded}`);
            }
            var completeResponse = yield this.ossApi.completeSignedS3Upload(accessToken, bucketKey, objectKey, "application/json", {
                uploadKey: uploadKey
            });
            onProgress === null || onProgress === void 0 ? void 0 : onProgress(100);
            return completeResponse;
        });
    }
    UploadToURL(currentUrl, fileChunk, accessToken, requestId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarHeaderParameter = {};
            localVarHeaderParameter['x-ads-request-id'] = requestId;
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter);
            localVarRequestOptions.data = fileChunk;
            const localVarAxiosArgs = {
                url: currentUrl,
                options: localVarRequestOptions
            };
            const request = (0, common_1.createRequestFunctionOss)(localVarAxiosArgs, this.sdkManager);
            const response = yield request();
            return response;
        });
    }
    Download(bucketKey, objectKey, filePath, accessToken, cancellationToken, projectScope = '', requestIdPrefix = '', onProgress) {
        return __awaiter(this, void 0, void 0, function* () {
            var requestId = yield this.HandleRequestId(requestIdPrefix, bucketKey, objectKey);
            this.ValidateProjectScopeName(requestId, projectScope);
            onProgress === null || onProgress === void 0 ? void 0 : onProgress(1);
            const response = yield this.GetS3SignedDownloadUrlWithRetry(bucketKey, objectKey, accessToken, requestId, projectScope);
            const fileSize = response.size;
            const numberOfChunks = this.CalculateNumberOfChunks(fileSize);
            var partsDownloaded = 0;
            var start = 0;
            const fileStream = (0, fs_1.createWriteStream)(filePath, { flags: 'a' });
            while (partsDownloaded < numberOfChunks) {
                this.logger.logInfo(`${requestId} Downloading part: ${partsDownloaded}`);
                var end = Math.min((partsDownloaded + 1) * Constants.ChunkSize, fileSize.valueOf());
                if (start == end) {
                    break;
                }
                var attemptCount = 0;
                while (attemptCount < this.maxRetryOnUrlExpiry) {
                    try {
                        attemptCount++;
                        this.logger.logInfo(`${requestId} Downloading file range : ${start - end}`);
                        yield this.writeToFileStreamFromUrl(fileStream, response.url, start, end, requestId);
                        start = end + 1;
                        partsDownloaded++;
                        const percentCompleted = Math.floor((partsDownloaded / numberOfChunks) * 100);
                        onProgress === null || onProgress === void 0 ? void 0 : onProgress(percentCompleted);
                        break;
                    }
                    catch (error) {
                    }
                }
            }
            fileStream.end();
        });
    }
    isFileSizeAllowed(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileSize = file.length;
            const numberOfChunks = this.CalculateNumberOfChunks(fileSize);
            if (numberOfChunks > this.maxChunkCountAllowed) {
                return false;
            }
            return true;
        });
    }
    readFileBytes(file, start, end) {
        const fileReader = file.subarray(start, end);
        return fileReader;
    }
    GetUploadUrlsWithRetry(bucketKey, objectKey, numberOfChunks, chunksUploaded, uploadKey, accessToken, projectScope, requestId) {
        return __awaiter(this, void 0, void 0, function* () {
            var attemptcount = 0;
            var parts = (Math.min(numberOfChunks - chunksUploaded, Constants.BatchSize));
            var firstPart = chunksUploaded + 1;
            do {
                this.logger.logInfo(`${requestId} Refreshing URL attempt:${attemptcount}.`);
                try {
                    var response = yield this.ossApi.signedS3Upload(accessToken, bucketKey, objectKey, projectScope, parts, firstPart, uploadKey);
                    return ([response.content, accessToken]);
                }
                catch (e) {
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
            throw new base_1.OssApiError(`${requestId} Error: Fail getting upload urls after maximum retry`);
        });
    }
    CalculateNumberOfChunks(fileSize) {
        if (fileSize == 0) {
            return 1;
        }
        var numberOfChunks = Math.trunc(fileSize / Constants.ChunkSize);
        if (fileSize % Constants.ChunkSize != 0) {
            numberOfChunks++;
        }
        return numberOfChunks;
    }
    ValidateFileSize(requestId, sourceToUpload) {
        return __awaiter(this, void 0, void 0, function* () {
            var sizeAllowed = yield this.isFileSizeAllowed(sourceToUpload);
            if (!sizeAllowed) {
                throw new base_1.OssApiError(`${requestId} File size too big to upload. Currently max file size allowed is ${Number(this.maxChunkCountAllowed) * Number(Constants.ChunkSize)} bytes`);
            }
        });
    }
    WriteToFileStreamFromUrl(fileStream, contentUrl, start, end, requestId) {
        return __awaiter(this, void 0, void 0, function* () {
            //  .Add("Range", "bytes=" + start + "-" + end);
            // var streamAsync = _forgeService.Client.GetByteArrayAsync(contentUrl);
            // _forgeService.Client.DefaultRequestHeaders.Remove("Range");
            // var available = streamAsync.Result.Length;
            // await fileStream.WriteAsync(streamAsync.Result, 0, available);
        });
    }
    HandleRequestId(parentRequestId, bucketKey, objectKey) {
        return __awaiter(this, void 0, void 0, function* () {
            var requestId = parentRequestId && parentRequestId.trim() != "" ? parentRequestId : String(Math.random());
            requestId = requestId + ":" + this.GenerateSdkRequestId(bucketKey, objectKey);
            // const localVarHeaderParameter = {} as any;
            // localVarHeaderParameter['x-ads-request-id'] = requestId;
            // const localVarRequestOptions = {} as any;
            // localVarRequestOptions.headers = { ...localVarHeaderParameter };
            // createRequestFunction(localVarRequestOptions, this.sdkManager);
            return requestId;
        });
    }
    GenerateSdkRequestId(bucketKey, objectKey) {
        return bucketKey + "/" + objectKey;
    }
    GetS3SignedDownloadUrlWithRetry(bucketKey, objectKey, accessToken, requestId, projectScope) {
        return __awaiter(this, void 0, void 0, function* () {
            var attemptCount = 0;
            do {
                this.logger.logInfo(`${requestId} Get signed URL to download directly from S3 attempt: ${attemptCount}`);
                try {
                    var objectStatusEnumString = model_1.ObjectStatusEnum.Complete;
                    var response = yield this.ossApi.signedS3Download(accessToken, bucketKey, objectKey, projectScope);
                    if (response.content.status != objectStatusEnumString) {
                        this.logger.logError(`${requestId} File not available for download yet.`);
                        throw new base_1.OssApiError(`${requestId} File not available for download yet.`);
                    }
                    return response.content;
                }
                catch (error) {
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
            throw new base_1.OssApiError(`${requestId} Error: Fail getting upload urls after maximum retry`);
        });
    }
    ValidateProjectScopeName(requestId, projectScope) {
        const scopeRegex = /^([a-zA-Z0-9.\\-_]{3,50}(,?)){1,20}$/;
        if (!(projectScope === '' || scopeRegex.test(projectScope))) {
            throw new base_1.OssApiError(`${requestId} Parameter 'projectScope' doesn't pass regex test - user must submit a valid scope.`);
        }
    }
    ThrowIfCancellationRequested(cancellationToken, requestId) {
        if (cancellationToken.signal.aborted) {
            this.logger.logInfo("${requestId} Cancellation requested.");
            cancellationToken.signal.throwIfAborted();
        }
    }
    writeToFileStreamFromUrl(fileStream, url, start, end, requestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarHeaderParameter = {};
            const rangeHeaderValue = `bytes=${start}-${end}`;
            localVarHeaderParameter['Range'] = String(rangeHeaderValue);
            const response = yield axios_1.default.get(url, {
                headers: {
                    Range: rangeHeaderValue,
                },
                responseType: 'arraybuffer',
            });
            const data = response.data;
            const chunk = Buffer.from(data);
            yield this.writeStreamAsync(fileStream, chunk);
            console.log(`${requestId} Successfully downloaded file range: ${start} - ${end}`);
        });
    }
    writeStreamAsync(stream, chunk) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                stream.write(chunk, (error) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
    }
}
exports.OSSFileTransfer = OSSFileTransfer;
