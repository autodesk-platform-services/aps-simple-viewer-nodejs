/**
 * Type of model view Possible values: 2d, 3d
 * @export
 * @enum {string}
 */
export declare const Role: {
    readonly _2d: "2d";
    readonly _3d: "3d";
};
export type Role = typeof Role[keyof typeof Role];
