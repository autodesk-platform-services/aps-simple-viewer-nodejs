/**
 * Specifies the materials to apply to the generated SVF derivatives. Available options are: - auto - (Default) Use the current setting of the default view of the input file. - basic - Use basic materials. - autodesk - Use Autodesk materials.
 * @export
 * @enum {string}
 */
export declare const MaterialMode: {
    readonly Auto: "auto";
    readonly Basic: "basic";
    readonly Autodesk: "autodesk";
};
export type MaterialMode = typeof MaterialMode[keyof typeof MaterialMode];
