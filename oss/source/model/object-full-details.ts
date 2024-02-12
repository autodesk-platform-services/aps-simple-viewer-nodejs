/* tslint:disable */
/* eslint-disable */


/**
 * Object Details json response
 * @export
 * @interface ObjectFullDetails
 */
export interface ObjectFullDetails {
    /**
     * Bucket key
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'bucketKey'?: string;
    /**
     * Object URN
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'objectId'?: string;
    /**
     * Object name
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'objectKey'?: string;
    /**
     * Object SHA1
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'sha1'?: string;
    /**
     * Object size
     * @type {number}
     * @memberof ObjectFullDetails
     */
    'size'?: number;
    /**
     * Object content-type
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'contentType'?: string;
    /**
     * URL to download the object
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'location'?: string;
    /**
     * Epoch timestamp when the object was created. Only provided if the user requests this to be included in the query parameters.
     * @type {number}
     * @memberof ObjectFullDetails
     */
    'createdDate'?: number;
    /**
     * Epoch timestamp when the object was last accessed. Only provided if the user requests this to be included in the query parameters.
     * @type {number}
     * @memberof ObjectFullDetails
     */
    'lastAccessedDate'?: number;
    /**
     * Epoch timestamp when the object was last modified. Only provided if the user requests this to be included in the query parameters.
     * @type {number}
     * @memberof ObjectFullDetails
     */
    'lastModifiedDate'?: number;
    /**
     * When specified, the response will include the user defined metadata in a JSON field named userDefinedMetadata, if available. The user defined metadata can be set on file uploading.
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'userDefinedMetadata'?: string;
}

