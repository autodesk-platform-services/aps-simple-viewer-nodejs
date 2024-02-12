/* tslint:disable */
/* eslint-disable */


/**
 * resetexpiration definition
 * @export
 * @interface Resetexpiration
 */
export interface Resetexpiration {
    /**
     * 
     * @type {string}
     * @memberof Resetexpiration
     */
    'bucketKey'?: string;
    /**
     * Object ID
     * @type {string}
     * @memberof Resetexpiration
     */
    'objectId'?: string;
    /**
     * Object name
     * @type {string}
     * @memberof Resetexpiration
     */
    'objectKey'?: string;
    /**
     * 
     * @type {string}
     * @memberof Resetexpiration
     */
    'sha1'?: string;
    /**
     * 
     * @type {number}
     * @memberof Resetexpiration
     */
    'size'?: number;
    /**
     * 
     * @type {string}
     * @memberof Resetexpiration
     */
    'contentType'?: string;
    /**
     * URL to download the object
     * @type {string}
     * @memberof Resetexpiration
     */
    'location'?: string;
    /**
     * Timestamp in epoch time
     * @type {number}
     * @memberof Resetexpiration
     */
    'ceatedDate'?: number;
    /**
     * Timestamp in epoch time
     * @type {number}
     * @memberof Resetexpiration
     */
    'lastAccessedDate'?: number;
    /**
     * Timestamp in epoch time
     * @type {number}
     * @memberof Resetexpiration
     */
    'lastModifiedDate'?: number;
}

