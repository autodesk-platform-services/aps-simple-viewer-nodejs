/* tslint:disable */
/* eslint-disable */


/**
 * Translate models into different units; this causes the values to change. For example, from millimeters (10, 123, 31) to centimeters (1.0, 12.3, 3.1). If the source unit or the unit you are translating into is not supported, the values remain unchanged. Possible values: meter, decimeter, centimeter, millimeter, micrometer, nanometer yard, foot, inch, mil, microinch Note that this feature does not support F3D files.
 * @export
 * @enum {string}
 */

export const Unit = {
    Meter: 'meter',
    Decimeter: 'decimeter',
    Centimeter: 'centimeter',
    Millimeter: 'millimeter',
    Micrometer: 'micrometer',
    Nanometer: 'nanometer',
    Yard: 'yard',
    Foot: 'foot',
    Inch: 'inch',
    Mil: 'mil',
    Microinch: 'microinch'
} as const;

export type Unit = typeof Unit[keyof typeof Unit];



