/**
 * Possible values are `bounded`, `trimmed` and `wireframe`. By default it is set to bounded surface.
 * @export
 * @enum {string}
 */
export declare const SurfaceType: {
    readonly Bounded: "bounded";
    readonly Trimmed: "trimmed";
    readonly Wireframe: "wireframe";
};
export type SurfaceType = typeof SurfaceType[keyof typeof SurfaceType];
