/**
 * `single` (default): creates one STL file for all the input files (assembly file)  `multiple`: creates a separate STL file for each object
 * @export
 * @enum {string}
 */
export declare const ExportFileStructure: {
    readonly Single: "single";
    readonly Multiple: "multiple";
};
export type ExportFileStructure = typeof ExportFileStructure[keyof typeof ExportFileStructure];
