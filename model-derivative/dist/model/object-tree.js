"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectTree = void 0;
/**
 *
 * @export
 * @interface ObjectTree
 */
class ObjectTree {
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
exports.ObjectTree = ObjectTree;
