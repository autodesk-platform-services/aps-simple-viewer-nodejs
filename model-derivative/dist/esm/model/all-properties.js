/* tslint:disable */
/* eslint-disable */
/**
 *
 * @export
 * @interface AllProperties
 */
export class AllProperties {
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
