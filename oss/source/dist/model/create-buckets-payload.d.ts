import { CreateBucketsPayloadAllow } from './create-buckets-payload-allow';
/**
 * Bucket Payload Body Structure
 * @export
 * @interface CreateBucketsPayload
 */
export interface CreateBucketsPayload {
    /**
     * Bucket key
     * @type {string}
     * @memberof CreateBucketsPayload
     */
    'bucketKey': string;
    /**
     *
     * @type {Array<CreateBucketsPayloadAllow>}
     * @memberof CreateBucketsPayload
     */
    'allow'?: Array<CreateBucketsPayloadAllow>;
    /**
     * [Data retention policy](https://developer.autodesk.com/en/docs/data/v2/overview/retention-policy/)  Acceptable values: `transient`, `temporary` or `persistent`
     * @type {string}
     * @memberof CreateBucketsPayload
     */
    'policyKey': CreateBucketsPayloadPolicyKeyEnum;
}
export declare const CreateBucketsPayloadPolicyKeyEnum: {
    readonly Transient: "transient";
    readonly Temporary: "temporary";
    readonly Persistent: "persistent";
};
export type CreateBucketsPayloadPolicyKeyEnum = typeof CreateBucketsPayloadPolicyKeyEnum[keyof typeof CreateBucketsPayloadPolicyKeyEnum];
