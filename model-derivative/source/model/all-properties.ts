/* tslint:disable */
/* eslint-disable */

import { AllPropertiesData } from './all-properties-data';

/**
 * 
 * @export
 * @interface AllProperties
 */
export class AllProperties {
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
    /**
     * 
     * @type {AllPropertiesData}
     * @memberof AllProperties
     */
    'data': AllPropertiesData;
}

