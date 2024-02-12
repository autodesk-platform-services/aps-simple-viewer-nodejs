/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface Completes3uploadResponse200
 */
export interface Completes3uploadResponse200 {
    /**
     * The key of the bucket into which the object has been uploaded.
     * @type {string}
     * @memberof Completes3uploadResponse200
     */
    'bucketKey'?: string;
    /**
     * The full OSS URN of the object.
     * @type {string}
     * @memberof Completes3uploadResponse200
     */
    'objectId'?: string;
    /**
     * The name of the object provided by the client.
     * @type {string}
     * @memberof Completes3uploadResponse200
     */
    'objectKey'?: string;
    /**
     * The size of the object in bytes.
     * @type {number}
     * @memberof Completes3uploadResponse200
     */
    'size'?: number;
    /**
     * The Content-Type of the object, specified in the request.
     * @type {string}
     * @memberof Completes3uploadResponse200
     */
    'contentType'?: string;
    /**
     * The URL at which to download the object.
     * @type {string}
     * @memberof Completes3uploadResponse200
     */
    'location'?: string;
}

