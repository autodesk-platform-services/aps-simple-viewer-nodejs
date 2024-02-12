/**
 *
 * @export
 * @enum {string}
 */
export declare const Payload: {
    readonly Text: "text";
    readonly Unit: "unit";
};
export type Payload = typeof Payload[keyof typeof Payload];
