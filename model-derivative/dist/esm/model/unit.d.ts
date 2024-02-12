/**
 * Translate models into different units; this causes the values to change. For example, from millimeters (10, 123, 31) to centimeters (1.0, 12.3, 3.1). If the source unit or the unit you are translating into is not supported, the values remain unchanged. Possible values: meter, decimeter, centimeter, millimeter, micrometer, nanometer yard, foot, inch, mil, microinch Note that this feature does not support F3D files.
 * @export
 * @enum {string}
 */
export declare const Unit: {
    readonly Meter: "meter";
    readonly Decimeter: "decimeter";
    readonly Centimeter: "centimeter";
    readonly Millimeter: "millimeter";
    readonly Micrometer: "micrometer";
    readonly Nanometer: "nanometer";
    readonly Yard: "yard";
    readonly Foot: "foot";
    readonly Inch: "inch";
    readonly Mil: "mil";
    readonly Microinch: "microinch";
};
export type Unit = typeof Unit[keyof typeof Unit];
