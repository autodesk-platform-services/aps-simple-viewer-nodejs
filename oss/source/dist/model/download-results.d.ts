import { DownloadResultsParams } from './download-results-params';
/**
 * objectKeyN is a placeholder for the first object key for which the client requested a download signed URL. The attributes within contain the success data / error info for the request for that object. `results` will contain one such attribute for each requested object in the batch.
 * @export
 * @interface DownloadResults
 */
export interface DownloadResults {
    /**
     * Indicates the status of the object. `complete` indicates a raw upload or merged resumable upload; `chunked` indicates an unmerged resumable upload where the user  provide `public-resource-fallback`=`false`; `fallback` indicates an unmerged resumable  upload where the user provides `public-resource-fallback`=`true`.
     * @type {string}
     * @memberof DownloadResults
     */
    'status'?: DownloadResultsStatusEnum;
    /**
     * The S3 signed URL with which to download the object. This attribute is returned when `status` is `complete` or `fallback`; in the latter case, this will return an OSS Signed Resource, not an S3 signed URL.
     * @type {string}
     * @memberof DownloadResults
     */
    'url'?: string;
    /**
     * A map of S3 signed URLs, one for each chunk of an unmerged resumable upload. This attribute is returned when `status` is `chunked`. The key of each entry is the byte range of the total file which the chunk comprises.
     * @type {object}
     * @memberof DownloadResults
     */
    'urls'?: object;
    /**
     *
     * @type {DownloadResultsParams}
     * @memberof DownloadResults
     */
    'params'?: DownloadResultsParams;
    /**
     * The object size in bytes.
     * @type {number}
     * @memberof DownloadResults
     */
    'size'?: number;
    /**
     * The calculated sha1 of the object, if available.
     * @type {string}
     * @memberof DownloadResults
     */
    'sha1'?: string;
}
export declare const DownloadResultsStatusEnum: {
    readonly Complete: "complete";
    readonly Chunked: "chunked";
    readonly Fallback: "fallback";
};
export type DownloadResultsStatusEnum = typeof DownloadResultsStatusEnum[keyof typeof DownloadResultsStatusEnum];
