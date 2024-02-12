"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model2dView = void 0;
/**
 * The format that 2D views must be rendered to. Available options are:  - legacy - (Default) Render to a model derivative specific file format. - pdf - Render to the PDF file format. This option applies only to Revit 2022 files and newer.
 * @export
 * @enum {string}
 */
exports.Model2dView = {
    Legacy: 'legacy',
    Pdf: 'pdf'
};
