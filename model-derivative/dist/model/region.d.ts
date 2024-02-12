/**
 * Region in which to store references. Possible values: US, EMEA. By default, it is set to US.
 * @export
 * @enum {string}
 */
export declare const Region: {
    readonly US: "US";
    readonly EMEA: "EMEA";
};
export type Region = typeof Region[keyof typeof Region];
