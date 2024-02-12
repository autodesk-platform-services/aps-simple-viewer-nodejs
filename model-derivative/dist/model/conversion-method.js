"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionMethod = void 0;
/**
 * Specifies what IFC loader to use during translation. Available options are: - legacy - Use the Navisworks IFC loader. - modern - Use the Revit IFC loader (recommended over the legacy option). - v3 - Use the newer Revit IFC loader (recommended over the older modern option) If both switchLoader and conversionMethod are specified, Model Derivative uses the conversionMethod parameter. If conversionMethod is not specified, Model Derivative uses the switchLoader parameter.
 * @export
 * @enum {string}
 */
exports.ConversionMethod = {
    Legacy: 'legacy',
    Modern: 'modern',
    V3: 'v3'
};
