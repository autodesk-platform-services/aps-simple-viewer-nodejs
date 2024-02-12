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
export declare const BucketsItemsPolicyKeyEnum: {
    readonly Transient: "transient";
    readonly Temporary: "temporary";
    readonly Persistent: "persistent";
};
export type BucketsItemsPolicyKeyEnum = typeof BucketsItemsPolicyKeyEnum[keyof typeof BucketsItemsPolicyKeyEnum];
