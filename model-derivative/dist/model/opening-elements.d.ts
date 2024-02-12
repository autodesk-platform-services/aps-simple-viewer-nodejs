/**
 * An option to be specified when the input file type is IFC. Specifies how openings are translated. Available options are: - hide - (default) openings are translated but are not visible by default. - show - openings are translated and are visible by default. - skip - openings are not translated. Note These options are applicable only when conversionMethod is set to modern or v3.
 * @export
 * @enum {string}
 */
export declare const OpeningElements: {
    readonly Hide: "hide";
    readonly Show: "show";
    readonly Skip: "skip";
};
export type OpeningElements = typeof OpeningElements[keyof typeof OpeningElements];
