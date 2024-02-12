/* tslint:disable */
/* eslint-disable */


/**
 * The values for the updatable params that were used in the creation of the returned S3 signed URL.
 * @export
 * @interface DownloadResultsParams
 */
export interface DownloadResultsParams {
    /**
     * The Content-Type value to expect when downloading the object, either echoing the response-content-type provided in this request, or defaulting to the Content-Type associated with the stored object record in OSS.
     * @type {string}
     * @memberof DownloadResultsParams
     */
    'Content-Type'?: string;
    /**
     * The Content-Disposition value to expect when downloading the object, either echoing the response-content-disposition provided in this request, or defaulting to the Content-Disposition associated with the stored object record in OSS.
     * @type {string}
     * @memberof DownloadResultsParams
     */
    'Content-Disposition'?: string;
    /**
     * The Cache-Control value to expect when downloading the object, either echoing the response-cache-control provided in this request, or defaulting to the Cache-Control associated with the stored object record in OSS.
     * @type {string}
     * @memberof DownloadResultsParams
     */
    'Cache-Control'?: string;
}

