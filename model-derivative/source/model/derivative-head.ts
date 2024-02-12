/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface DerivativeHead
 */
export class DerivativeHead {
    private _isProcessing: boolean;

     constructor(isProcessing: boolean)  {
            this._isProcessing = isProcessing;
     } 

    public get isProcessing(): boolean {
        return this._isProcessing;
    }

    public set isProcessing(value){
        this._isProcessing = value;
     }    
}

