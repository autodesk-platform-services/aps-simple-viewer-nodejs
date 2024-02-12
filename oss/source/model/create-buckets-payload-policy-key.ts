/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface CreateBucketsPayloadPolicyKey
 */
export interface CreateBucketsPayloadPolicyKey {
    /**
     * The application key to grant access to
     * @type {string}
     * @memberof CreateBucketsPayloadPolicyKey
     */
    'authId': string;
    /**
     * Acceptable values: `full` or `read` 
     * @type {string}
     * @memberof CreateBucketsPayloadPolicyKey
     */
    'access': CreateBucketsPayloadPolicyKeyAccessEnum;
}

export const CreateBucketsPayloadPolicyKeyAccessEnum = {
    Transient: 'transient',
    Temporary: 'temporary',
    Persistent: 'persistent'
} as const;

export type CreateBucketsPayloadPolicyKeyAccessEnum = typeof CreateBucketsPayloadPolicyKeyAccessEnum[keyof typeof CreateBucketsPayloadPolicyKeyAccessEnum];


