/* tslint:disable */
/* eslint-disable */


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

export const ProtectBucketObjectProtectionEnum = {
    True: 'true',
    False: 'false'
} as const;

export type ProtectBucketObjectProtectionEnum = typeof ProtectBucketObjectProtectionEnum[keyof typeof ProtectBucketObjectProtectionEnum];


