/**
 * Object resetexpiration Object json response
 * @export
 * @interface CreateObjectResetexpiration
 */
export interface CreateObjectResetexpiration {
    /**
     *
     * @type {string}
     * @memberof CreateObjectResetexpiration
     */
    'bucketKey'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateObjectResetexpiration
     */
    'objectId'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateObjectResetexpiration
     */
    'objectKey'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateObjectResetexpiration
     */
    'sha1'?: string;
    /**
     *
     * @type {number}
     * @memberof CreateObjectResetexpiration
     */
    'size'?: number;
    /**
     *
     * @type {string}
     * @memberof CreateObjectResetexpiration
     */
    'contentType'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateObjectResetexpiration
     */
    'location'?: string;
    /**
     * Timestamp in epoch time
     * @type {number}
     * @memberof CreateObjectResetexpiration
     */
    'ceatedDate'?: number;
    /**
     * Timestamp in epoch time
     * @type {number}
     * @memberof CreateObjectResetexpiration
     */
    'lastAccessedDate'?: number;
    /**
     * Timestamp in epoch time
     * @type {number}
     * @memberof CreateObjectResetexpiration
     */
    'lastModifiedDate'?: number;
}
