/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface Completes3uploadResponse400Parts
 */
export interface Completes3uploadResponse400Parts {
    /**
     * The index of the part in the multipart upload.
     * @type {number}
     * @memberof Completes3uploadResponse400Parts
     */
    'part'?: number;
    /**
     * Indicates whether this particular part uploaded to S3 is valid. If no part has been uploaded to S3 for a particular index, the status will be \'Pending\'. If the eTag of the part in S3 does not match the one provided in the request, the status will be \'Unexpected\'. If the blob uploaded to S3 is smaller than the minimum chunk size (5MB for all parts except the final one), the status will be \'TooSmall\'. If both of the latter conditions are true, the status will be \'Unexpected+TooSmall\'. If none of these issues exist, the status will be \'Ok\'.
     * @type {string}
     * @memberof Completes3uploadResponse400Parts
     */
    'status'?: Completes3uploadResponse400PartsStatusEnum;
    /**
     * The size of the corresponding part detected in S3.
     * @type {number}
     * @memberof Completes3uploadResponse400Parts
     */
    'size'?: number;
    /**
     * The eTag of the detected part in S3.
     * @type {string}
     * @memberof Completes3uploadResponse400Parts
     */
    'eTag'?: string;
}

export const Completes3uploadResponse400PartsStatusEnum = {
    Ok: 'Ok',
    Pending: 'Pending',
    Unexpected: 'Unexpected',
    TooSmall: 'TooSmall',
    UnexpectedTooSmall: 'Unexpected+TooSmall'
} as const;

export type Completes3uploadResponse400PartsStatusEnum = typeof Completes3uploadResponse400PartsStatusEnum[keyof typeof Completes3uploadResponse400PartsStatusEnum];


