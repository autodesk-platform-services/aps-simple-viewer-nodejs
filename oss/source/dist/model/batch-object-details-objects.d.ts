/**
 *
 * @export
 * @interface BatchObjectDetailsObjects
 */
export interface BatchObjectDetailsObjects {
    /**
     * The key of the object
     * @type {string}
     * @memberof BatchObjectDetailsObjects
     */
    'objectKey': string;
    /**
     * The size of the object in bytes
     * @type {number}
     * @memberof BatchObjectDetailsObjects
     */
    'size': number;
    /**
     * The URN of the object
     * @type {string}
     * @memberof BatchObjectDetailsObjects
     */
    'objectId'?: string;
    /**
     * The SHA1 hash of the object
     * @type {string}
     * @memberof BatchObjectDetailsObjects
     */
    'sha1'?: string;
    /**
     * Object content-type
     * @type {string}
     * @memberof BatchObjectDetailsObjects
     */
    'contentType'?: string;
    /**
     * URL to download the object
     * @type {string}
     * @memberof BatchObjectDetailsObjects
     */
    'location'?: string;
    /**
     * Epoch timestamp when the object was created. Only provided if the user requests this to be included in the query parameters.
     * @type {number}
     * @memberof BatchObjectDetailsObjects
     */
    'createdDate'?: number;
    /**
     * Epoch timestamp when the object was last accessed. Only provided if the user requests this to be included in the query parameters.
     * @type {number}
     * @memberof BatchObjectDetailsObjects
     */
    'lastAccessedDate'?: number;
    /**
     * Epoch timestamp when the object was last modified. Only provided if the user requests this to be included in the query parameters.
     * @type {number}
     * @memberof BatchObjectDetailsObjects
     */
    'lastModifiedDate'?: number;
    /**
     * When specified, the response will include the user defined metadata in a JSON field named userDefinedMetadata, if available. The user defined metadata can be set on file uploading.
     * @type {string}
     * @memberof BatchObjectDetailsObjects
     */
    'userDefinedMetadata'?: string;
}
