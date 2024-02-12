/**
 *
 * @export
 * @interface Batchsigneds3uploadObjectRequests
 */
export interface Batchsigneds3uploadObjectRequests {
    /**
     * The key/name of the object for which to create an S3 upload URL. If neither the \"part\" nor \"parts\" attribute is provided, OSS will return a single upload URL with which to upload the entire object.
     * @type {string}
     * @memberof Batchsigneds3uploadObjectRequests
     */
    'objectKey': string;
    /**
     * The index of an individual part for which to retrieve a chunk upload URL.
     * @type {number}
     * @memberof Batchsigneds3uploadObjectRequests
     */
    'firstPart'?: number;
    /**
     * For a multipart upload, the number of chunk URLs to return. If X is provided, the response will include chunk URLs from 1 to X. If none provided, the response will include only a single URL with which to upload an entire object.
     * @type {number}
     * @memberof Batchsigneds3uploadObjectRequests
     */
    'parts'?: number;
    /**
     * The identifier of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. This must match the uploadKey returned by a previous call to this endpoint where the client requested more than one part URL.
     * @type {string}
     * @memberof Batchsigneds3uploadObjectRequests
     */
    'uploadKey'?: string;
}
