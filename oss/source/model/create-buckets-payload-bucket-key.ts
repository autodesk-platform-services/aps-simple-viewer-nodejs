/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface CreateBucketsPayloadBucketKey
 */
export interface CreateBucketsPayloadBucketKey {
    /**
     * The application key to grant access to
     * @type {string}
     * @memberof CreateBucketsPayloadBucketKey
     */
    'authId': string;
    /**
     * Acceptable values: `full` or `read` 
     * @type {string}
     * @memberof CreateBucketsPayloadBucketKey
     */
    'access': CreateBucketsPayloadBucketKeyAccessEnum;
}

export const CreateBucketsPayloadBucketKeyAccessEnum = {
    Full: 'full',
    Read: 'read'
} as const;

export type CreateBucketsPayloadBucketKeyAccessEnum = typeof CreateBucketsPayloadBucketKeyAccessEnum[keyof typeof CreateBucketsPayloadBucketKeyAccessEnum];


