/**
 * Specifies what IFC loader to use during translation. Available options are: - legacy - Use the Navisworks IFC loader. - modern - Use the Revit IFC loader (recommended over the legacy option). - v3 - Use the newer Revit IFC loader (recommended over the older modern option) If both switchLoader and conversionMethod are specified, Model Derivative uses the conversionMethod parameter. If conversionMethod is not specified, Model Derivative uses the switchLoader parameter.
 * @export
 * @enum {string}
 */
export declare const ConversionMethod: {
    readonly Legacy: "legacy";
    readonly Modern: "modern";
    readonly V3: "v3";
};
export type ConversionMethod = typeof ConversionMethod[keyof typeof ConversionMethod];
