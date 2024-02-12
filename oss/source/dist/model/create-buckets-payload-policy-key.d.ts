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
export declare const CreateBucketsPayloadPolicyKeyAccessEnum: {
    readonly Transient: "transient";
    readonly Temporary: "temporary";
    readonly Persistent: "persistent";
};
export type CreateBucketsPayloadPolicyKeyAccessEnum = typeof CreateBucketsPayloadPolicyKeyAccessEnum[keyof typeof CreateBucketsPayloadPolicyKeyAccessEnum];
