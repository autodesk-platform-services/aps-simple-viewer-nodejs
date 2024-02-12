"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingStoreys = void 0;
/**
 * Specifies how storeys are translated. Available options are: - hide - (default) storeys are extracted but not visible by default. - show - storeys are extracted and are visible by default. - skip - storeys are not translated. Note These options are applicable only when conversionMethod is set to modern or v3.
 * @export
 * @enum {string}
 */
exports.BuildingStoreys = {
    Hide: 'hide',
    Show: 'show',
    Skip: 'skip'
};
