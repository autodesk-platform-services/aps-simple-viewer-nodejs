/**
 * Default format is `binary`. Possible values are `binary` or `ascii`.
 * @export
 * @enum {string}
 */
export declare const Format: {
    readonly Binary: "binary";
    readonly Ascii: "ascii";
};
export type Format = typeof Format[keyof typeof Format];
