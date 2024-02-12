/**
 * Required options for SVF type. Possible values are `2d` and `3d`.
 * @export
 * @enum {string}
 */
export declare const View: {
    readonly _2d: "2d";
    readonly _3d: "3d";
};
export type View = typeof View[keyof typeof View];
