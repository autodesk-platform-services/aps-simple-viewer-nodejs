/**
 * Export the solid body to IGES `solid`, `surface` or `wireframe`. By default, it is set to `solid`.
 * @export
 * @enum {string}
 */
export declare const SolidType: {
    readonly Solid: "solid";
    readonly Surface: "surface";
    readonly Wireframe: "wireframe";
};
export type SolidType = typeof SolidType[keyof typeof SolidType];
