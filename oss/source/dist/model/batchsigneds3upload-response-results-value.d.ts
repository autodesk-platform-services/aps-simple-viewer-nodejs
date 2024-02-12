/**
 *
 * @export
 * @interface Batchsigneds3uploadResponseResultsValue
 */
export interface Batchsigneds3uploadResponseResultsValue {
    /**
     * Accompanies error state for the object and describes the error encountered
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'reason'?: string;
    /**
     * Appears when object is in error state
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'status'?: string;
    /**
     * Time Stamp representing the upload abort date for which all parts must be uploaded for the object and the complete upload endpoint must be called.
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'uploadExpiration'?: string;
    /**
     * The identifier of the upload session, to differentiate multiple attempts to upload data for the same object. This must be provided when re-requesting chunk URLs for the same blob if they expire, and when calling the Complete Upload endpoint.
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'uploadKey': string;
    /**
     * Time Stamp representing the expiration of the generated signed URLs.  Note that when multiple parts/URLs are requested, there is a chance that this time stamp does not represent the expiration of all URLs in the group. Consider this expiration a very close approximation of the expiration of the URLs in the group
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'urlExpiration'?: string;
    /**
     * An array of signed URLs. For a single-part upload, this will only include a single URL. For a multipart upload, there will be one for each chunk of a multipart upload; the index of the URL in the array corresponds to the part number of the chunk.
     * @type {Array<string>}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'urls': Array<string>;
}
