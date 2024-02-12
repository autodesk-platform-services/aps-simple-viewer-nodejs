/**
 * Object json response
 * @export
 * @interface ObjectDetails
 */
export interface ObjectDetails {
    /**
     * Bucket key
     * @type {string}
     * @memberof ObjectDetails
     */
    'bucketKey'?: string;
    /**
     * Object URN
     * @type {string}
     * @memberof ObjectDetails
     */
    'objectId'?: string;
    /**
     * Object name
     * @type {string}
     * @memberof ObjectDetails
     */
    'objectKey'?: string;
    /**
     * Object SHA1
     * @type {string}
     * @memberof ObjectDetails
     */
    'sha1'?: string;
    /**
     * Object size
     * @type {number}
     * @memberof ObjectDetails
     */
    'size'?: number;
    /**
     * Object content-type
     * @type {string}
     * @memberof ObjectDetails
     */
    'contentType'?: string;
    /**
     * URL to download the object
     * @type {string}
     * @memberof ObjectDetails
     */
    'location'?: string;
}
