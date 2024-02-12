/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface BlockUploadRequest
 */
export interface BlockUploadRequest {
    /**
     * 
     * @type {number}
     * @memberof BlockUploadRequest
     */
    'fileSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof BlockUploadRequest
     */
    'blockSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof BlockUploadRequest
     */
    'sha1'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BlockUploadRequest
     */
    'blockHashes'?: Array<string>;
}

