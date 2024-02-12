/* tslint:disable */
/* eslint-disable */
/**
 *
 * @export
 * @interface DerivativeHead
 */
export class DerivativeHead {
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
