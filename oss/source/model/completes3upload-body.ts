/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface Completes3uploadBody
 */
export interface Completes3uploadBody {
    /**
     * The identifier of the upload session, which was provided by OSS in the response to the request for the signed URL/s with which to upload the object.
     * @type {string}
     * @memberof Completes3uploadBody
     */
    'uploadKey': string;
    /**
     * The expected size of the uploaded object. If provided, OSS will check this against the blob in S3 and return an error if the size does not match.
     * @type {number}
     * @memberof Completes3uploadBody
     */
    'size'?: number;
    /**
     * An array of eTags. For a single-part upload, this array contains the expected eTag of the entire object. For a multipart upload, this array contains the expected eTag of each part of the upload; the index of an eTag in the array corresponds to its part number in the upload.
     * @type {Array<string>}
     * @memberof Completes3uploadBody
     */
    'eTags'?: Array<string>;
}

