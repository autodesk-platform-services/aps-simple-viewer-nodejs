/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface BucketsItems
 */
export interface BucketsItems {
    /**
     * Bucket key
     * @type {string}
     * @memberof BucketsItems
     */
    'bucketKey': string;
    /**
     * Timestamp in epoch time
     * @type {number}
     * @memberof BucketsItems
     */
    'createdDate': number;
    /**
     * Policy values: `transient`, `temporary` or `persistent` 
     * @type {string}
     * @memberof BucketsItems
     */
    'policyKey': BucketsItemsPolicyKeyEnum;
}

export const BucketsItemsPolicyKeyEnum = {
    Transient: 'transient',
    Temporary: 'temporary',
    Persistent: 'persistent'
} as const;

export type BucketsItemsPolicyKeyEnum = typeof BucketsItemsPolicyKeyEnum[keyof typeof BucketsItemsPolicyKeyEnum];


