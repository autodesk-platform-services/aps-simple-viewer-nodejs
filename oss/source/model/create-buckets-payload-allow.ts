/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface CreateBucketsPayloadAllow
 */
export interface CreateBucketsPayloadAllow {
    /**
     * The application key to grant access to
     * @type {string}
     * @memberof CreateBucketsPayloadAllow
     */
    'authId': string;
    /**
     * Acceptable values: `full` or `read` 
     * @type {string}
     * @memberof CreateBucketsPayloadAllow
     */
    'access': CreateBucketsPayloadAllowAccessEnum;
}

export const CreateBucketsPayloadAllowAccessEnum = {
    Full: 'full',
    Read: 'read'
} as const;

export type CreateBucketsPayloadAllowAccessEnum = typeof CreateBucketsPayloadAllowAccessEnum[keyof typeof CreateBucketsPayloadAllowAccessEnum];


