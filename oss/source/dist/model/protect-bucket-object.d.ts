/**
 *
 * @export
 * @interface ProtectBucketObject
 */
export interface ProtectBucketObject {
    /**
     * true or false indicating whether to protect the bucket from deletion
     * @type {string}
     * @memberof ProtectBucketObject
     */
    'protection': ProtectBucketObjectProtectionEnum;
}
export declare const ProtectBucketObjectProtectionEnum: {
    readonly True: "true";
    readonly False: "false";
};
export type ProtectBucketObjectProtectionEnum = typeof ProtectBucketObjectProtectionEnum[keyof typeof ProtectBucketObjectProtectionEnum];
