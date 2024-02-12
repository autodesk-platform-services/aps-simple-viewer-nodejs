/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface Batchsigneds3downloadObjectRequests
 */
export interface Batchsigneds3downloadObjectRequests {
    /**
     * The key of the object for which to create a download signed URL.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'objectKey'?: string;
    /**
     * The value of the Content-Type header the client expects to receive from S3. If this attribute is not provided, it defaults to the value stored for the object itself.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'response-content-type'?: string;
    /**
     * The value of the Content-Disposition header the client expects to receive from S3. If this attribute is not provided, it defaults to the value stored for the object itself.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'response-content-disposition'?: string;
    /**
     * The value of the Cache-Control header that the client expects to receive from S3. If this attribute is not provided, it defaults to the value stored for the object itself.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'response-cache-control'?: string;
    /**
     * The value of the ETag of the object. If they match, the response body will show the status of this item as `skipped` with the reason `Not Modified`, as the client already has the data.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'If-None-Match'?: string;
    /**
     * If the requested object has not been modified since the time specified in this attribute, the response body will show the status of this item as `skipped` with the reason `Not Modified`, as the client still has the latest version of the data.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'If-Modified-Since'?: string;
}

