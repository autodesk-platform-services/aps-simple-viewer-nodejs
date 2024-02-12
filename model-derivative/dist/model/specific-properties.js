"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificProperties = void 0;
/**
 *
 * @export
 * @interface SpecificProperties
 */
class SpecificProperties {
    constructor(isProcessing) {
        this._isProcessing = isProcessing;
    }
    get isProcessing() {
        return this._isProcessing;
    }
    set isProcessing(value) {
        this._isProcessing = value;
    }
}
exports.SpecificProperties = SpecificProperties;
