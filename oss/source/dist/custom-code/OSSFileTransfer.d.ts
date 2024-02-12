/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { IAuthClient, SDKManager, ApiResponse, ApsServiceRequestConfig } from "@aps_sdk/autodesk-sdkmanager";
import { IFileTransferConfigurations } from './FileTransferConfigurations';
import { OSSApi } from "../api";
import { WriteStream } from "fs";
export interface IOSSFileTransfer {
}
export declare class OSSFileTransfer implements IOSSFileTransfer {
    configuration: IFileTransferConfigurations;
    ossApi: OSSApi;
    authentication: IAuthClient;
    private maxRetryOnTokenExpiry;
    private maxChunkCountAllowed;
    private maxRetryOnUrlExpiry;
    sdkManager: SDKManager;
    private logger;
    private readonly accessTokenExpiredMessage;
    private readonly forbiddenMessage;
    constructor(configuration: IFileTransferConfigurations, sdkmanager: SDKManager);
    Upload(bucketKey: string, objectKey: string, sourceToUpload: Buffer, accessToken: string, cancellationToken: AbortController, projectScope?: string, requestIdPrefix?: string, onProgress?: (percentCompleted: number) => void): Promise<ApiResponse>;
    protected UploadToURL(currentUrl: string, fileChunk: Buffer, accessToken: string, requestId: string, options?: ApsServiceRequestConfig): Promise<any>;
    Download(bucketKey: string, objectKey: string, filePath: string, accessToken: string, cancellationToken: AbortController, projectScope?: string, requestIdPrefix?: string, onProgress?: (percentCompleted: number) => void): Promise<void>;
    private isFileSizeAllowed;
    private readFileBytes;
    private GetUploadUrlsWithRetry;
    private CalculateNumberOfChunks;
    private ValidateFileSize;
    protected WriteToFileStreamFromUrl(fileStream: File, contentUrl: string, start: number, end: number, requestId: string): Promise<void>;
    private HandleRequestId;
    private GenerateSdkRequestId;
    private GetS3SignedDownloadUrlWithRetry;
    private ValidateProjectScopeName;
    private ThrowIfCancellationRequested;
    protected writeToFileStreamFromUrl(fileStream: WriteStream, url: string, start: number, end: number, requestId: any): Promise<void>;
    protected writeStreamAsync(stream: NodeJS.WritableStream, chunk: Buffer): Promise<void>;
}
