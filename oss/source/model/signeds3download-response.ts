/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface Signeds3downloadResponse
 */
export interface Signeds3downloadResponse {
    /**
     * Indicates the status of the object. `complete` indicates a raw upload or merged resumable upload; `chunked` indicates an unmerged resumable upload where the user  provide `public-resource-fallback`=`false`; `fallback` indicates an unmerged resumable  upload where the user provides `public-resource-fallback`=`true`.
     * @type {string}
     * @memberof Signeds3downloadResponse
     */
    'status': Signeds3downloadResponseStatusEnum;
    /**
     * The S3 signed URL with which to download the object. This attribute is returned when `status` is `complete` or `fallback`; in the latter case, this will return an OSS Signed Resource, not an S3 signed URL.
     * @type {string}
     * @memberof Signeds3downloadResponse
     */
    'url'?: string;
    /**
     * A map of S3 signed URLs, one for each chunk of an unmerged resumable upload. This attribute is returned when `status` is `chunked`. The key of each entry is the byte range of the total file which the chunk comprises.
     * @type {object}
     * @memberof Signeds3downloadResponse
     */
    'urls'?: object;
    /**
     * The values for the updatable params that were used in the creation of the returned S3 signed URL -- `Content-Type`, `Content-Disposition`, and `Cache-Control`.
     * @type {object}
     * @memberof Signeds3downloadResponse
     */
    'params': object;
    /**
     * The object size in bytes.
     * @type {number}
     * @memberof Signeds3downloadResponse
     */
    'size': number;
    /**
     * The calculated sha1 of the object, if available.
     * @type {string}
     * @memberof Signeds3downloadResponse
     */
    'sha1'?: string;
}

export const Signeds3downloadResponseStatusEnum = {
    Complete: 'complete',
    Chunked: 'chunked',
    Fallback: 'fallback'
} as const;

export type Signeds3downloadResponseStatusEnum = typeof Signeds3downloadResponseStatusEnum[keyof typeof Signeds3downloadResponseStatusEnum];


