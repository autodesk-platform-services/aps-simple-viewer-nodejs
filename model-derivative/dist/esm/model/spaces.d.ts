/**
 * Specifies how spaces are translated. Available options are: - hide - (default) spaces are translated but are not visible by default. - show - spaces are translated and are visible by default. - skip - spaces are not translated. Note These options are applicable only when conversionMethod is set to modern or v3.
 * @export
 * @enum {string}
 */
export declare const Spaces: {
    readonly Hide: "hide";
    readonly Show: "show";
    readonly Skip: "skip";
};
export type Spaces = typeof Spaces[keyof typeof Spaces];
