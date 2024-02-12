/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface BatchcompleteuploadObjectRequests
 */
export interface BatchcompleteuploadObjectRequests {
    /**
     * The key/name of the object for which to complete an upload.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'objectKey': string;
    /**
     * The key of the upload to complete.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'uploadKey': string;
    /**
     * The size of the object for which to complete an upload. If provided, OSS will fail the upload completion if the size does not match that of the data found in S3.
     * @type {number}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'size'?: number;
    /**
     * The eTags of the parts uploaded to S3, exactly as returned by S3. The index of an eTag in the array corresponds to the number of the part in the entire object. If provided, OSS will fail the upload completion if any part does not match the data found in S3.
     * @type {Array<string>}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'eTags'?: Array<string>;
    /**
     * The Content-Type value that OSS will store in the record for the uploaded object.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-meta-Content-Type'?: string;
    /**
     * The Content-Disposition value that OSS will store in the record for the uploaded object.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-meta-Content-Disposition'?: string;
    /**
     * The Content-Encoding value that OSS will store in the record for the uploaded object.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-meta-Content-Encoding'?: string;
    /**
     * The Cache-Control value that OSS will store in the record for the uploaded object.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-meta-Cache-Control'?: string;
    /**
     * This parameter allows setting any custom metadata to be stored with the object, which can be retrieved later on download or when getting the object details. It has the following restrictions: - It must have a JSON format. - The maximum length is 100 bytes
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-user-defined-metadata'?: string;
}

