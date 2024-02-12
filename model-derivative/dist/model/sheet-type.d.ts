/**
 * Export the sheet body to IGES. `open`, `shell`, `surface` or `wireframe`. By default, it is set to `surface`.
 * @export
 * @enum {string}
 */
export declare const SheetType: {
    readonly Open: "open";
    readonly Surface: "surface";
    readonly Shell: "shell";
    readonly Wireframe: "wireframe";
};
export type SheetType = typeof SheetType[keyof typeof SheetType];
