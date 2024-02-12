/**
 *
 * @export
 * @enum {string}
 */
export declare const ObjectStatusEnum: {
    readonly Complete: "complete";
    readonly Chunked: "chunked";
    readonly Fallback: "fallback";
};
export type ObjectStatusEnum = typeof ObjectStatusEnum[keyof typeof ObjectStatusEnum];
