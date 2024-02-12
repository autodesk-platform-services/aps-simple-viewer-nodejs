/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the materials to apply to the generated SVF derivatives. Available options are: - auto - (Default) Use the current setting of the default view of the input file. - basic - Use basic materials. - autodesk - Use Autodesk materials.
 * @export
 * @enum {string}
 */

export const MaterialMode = {
    Auto: 'auto',
    Basic: 'basic',
    Autodesk: 'autodesk'
} as const;

export type MaterialMode = typeof MaterialMode[keyof typeof MaterialMode];



