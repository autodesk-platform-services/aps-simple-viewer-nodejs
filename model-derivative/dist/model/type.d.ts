/**
 * The requested output types.
 * Possible values include `svf`, `svf2`, `thumbnail`, `stl`, `step`, `iges`, `obj`, `ifc` or `dwg`.
 * For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
 * @export
 * @enum {string}
 */
export declare const Type: {
    readonly Svf: "Svf";
    readonly Svf2: "Svf2";
    readonly Thumbnail: "Thumbnail";
    readonly Stl: "Stl";
    readonly Step: "Step";
    readonly Iges: "Iges";
    readonly Obj: "Obj";
    readonly Ifc: "Ifc";
    readonly Dwg: "Dwg";
    readonly Fbx: "Fbx";
};
export type Type = typeof Type[keyof typeof Type];
