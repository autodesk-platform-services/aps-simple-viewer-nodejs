export interface IFileTransferConfigurations {
    GetRetryCount(): number;
    GetMaxChunkCountAllowed(): number;
    GetMaxRetryOnTokenExpiry(): number;
    GetMaxRetryOnUrlExpiry(): number;
}
export declare class FileTransferConfigurations implements IFileTransferConfigurations {
    private _retryCount;
    private _maxChunkCountAllowed;
    private _maxRetryOnTokenExpiry;
    private _maxRetryOnUrlExpiry;
    constructor(retryCount: number, maxChunkCountAllowed?: number, maxRetryOnTokenExpiry?: number, maxRetryOnUrlExpiry?: number);
    GetRetryCount(): number;
    GetMaxChunkCountAllowed(): number;
    GetMaxRetryOnTokenExpiry(): number;
    GetMaxRetryOnUrlExpiry(): number;
}
