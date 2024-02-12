/**
 * Specifies how storeys are translated. Available options are: - hide - (default) storeys are extracted but not visible by default. - show - storeys are extracted and are visible by default. - skip - storeys are not translated. Note These options are applicable only when conversionMethod is set to modern or v3.
 * @export
 * @enum {string}
 */
export declare const BuildingStoreys: {
    readonly Hide: "hide";
    readonly Show: "show";
    readonly Skip: "skip";
};
export type BuildingStoreys = typeof BuildingStoreys[keyof typeof BuildingStoreys];
