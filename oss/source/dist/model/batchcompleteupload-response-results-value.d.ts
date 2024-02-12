import { BatchcompleteuploadResponseResultsValueParts } from './batchcompleteupload-response-results-value-parts';
/**
 *
 * @export
 * @interface BatchcompleteuploadResponseResultsValue
 */
export interface BatchcompleteuploadResponseResultsValue {
    /**
     * A string indicating whether the object completion failed. If this is not present, assume the completion succeeded. If this is \"error\", then the object completion failed.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'status'?: string;
    /**
     * The key of the bucket into which the object was uploaded.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'bucketKey'?: string;
    /**
     * The key of the object.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'objectKey'?: string;
    /**
     * The URN of the object.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'objectId'?: string;
    /**
     * The size of the object in bytes, if successful. If unsuccessful due to a size mismatch, this is an object with information about the mismatch.
     * @type {number}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'size'?: number;
    /**
     * The Content-Type stored for the object, if provided.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'contentType'?: string;
    /**
     * The Content-Disposition stored for the object, if provided.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'contentDisposition'?: string;
    /**
     * The Content-Encoding stored for the object, if provided.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'contentEncoding'?: string;
    /**
     * The Cache-Control stored for the object, if provided.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'cacheControl'?: string;
    /**
     * An array containing the status of each part, indicating any issues in eTag mismatch or size issues.
     * @type {Array<BatchcompleteuploadResponseResultsValueParts>}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'parts'?: Array<BatchcompleteuploadResponseResultsValueParts>;
    /**
     * The reason for the failure, if the status is \"error\".
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValue
     */
    'reason'?: string;
}
