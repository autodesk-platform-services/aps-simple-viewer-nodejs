"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllProperties = void 0;
/**
 *
 * @export
 * @interface AllProperties
 */
class AllProperties {
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
exports.AllProperties = AllProperties;
