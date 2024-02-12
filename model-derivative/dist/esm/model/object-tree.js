/* tslint:disable */
/* eslint-disable */
/**
 *
 * @export
 * @interface ObjectTree
 */
export class ObjectTree {
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
