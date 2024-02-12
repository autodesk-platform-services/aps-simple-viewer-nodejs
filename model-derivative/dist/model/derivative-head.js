"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DerivativeHead = void 0;
/**
 *
 * @export
 * @interface DerivativeHead
 */
class DerivativeHead {
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
exports.DerivativeHead = DerivativeHead;
