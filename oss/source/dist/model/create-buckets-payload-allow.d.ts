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
export declare const CreateBucketsPayloadAllowAccessEnum: {
    readonly Full: "full";
    readonly Read: "read";
};
export type CreateBucketsPayloadAllowAccessEnum = typeof CreateBucketsPayloadAllowAccessEnum[keyof typeof CreateBucketsPayloadAllowAccessEnum];
