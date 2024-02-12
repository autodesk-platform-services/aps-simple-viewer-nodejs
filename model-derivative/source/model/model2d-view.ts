/* tslint:disable */
/* eslint-disable */


/**
 * The format that 2D views must be rendered to. Available options are:  - legacy - (Default) Render to a model derivative specific file format. - pdf - Render to the PDF file format. This option applies only to Revit 2022 files and newer.
 * @export
 * @enum {string}
 */

export const Model2dView = {
    Legacy: 'legacy',
    Pdf: 'pdf'
} as const;

export type Model2dView = typeof Model2dView[keyof typeof Model2dView];



