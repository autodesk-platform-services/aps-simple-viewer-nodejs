/**
 * A STEP file can be generated with the following Application Protocols: `203` for configuration controlled design, `214` for core data for automotive mechanical design processes, `242` for managed model based 3D engineering. By default, `214` will be exported.
 * @export
 * @enum {string}
 */
export declare const ApplicationProtocol: {
    readonly _203: "203";
    readonly _214: "214";
    readonly _242: "242";
};
export type ApplicationProtocol = typeof ApplicationProtocol[keyof typeof ApplicationProtocol];
