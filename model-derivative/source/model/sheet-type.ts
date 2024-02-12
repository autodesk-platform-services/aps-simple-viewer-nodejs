/* tslint:disable */
/* eslint-disable */


/**
 * Export the sheet body to IGES. `open`, `shell`, `surface` or `wireframe`. By default, it is set to `surface`.
 * @export
 * @enum {string}
 */

export const SheetType = {
    Open: 'open',
    Surface: 'surface',
    Shell: 'shell',
    Wireframe: 'wireframe'
} as const;

export type SheetType = typeof SheetType[keyof typeof SheetType];



