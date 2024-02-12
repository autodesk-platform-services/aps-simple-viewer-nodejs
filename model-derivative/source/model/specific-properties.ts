/* tslint:disable */
/* eslint-disable */

import { SpecificPropertiesData } from './specific-properties-data';
import { SpecificPropertiesPagination } from './specific-properties-pagination';

/**
 * 
 * @export
 * @interface SpecificProperties
 */
export class SpecificProperties {
    private _isProcessing: boolean;

    constructor(isProcessing: boolean) {
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
     * @type {SpecificPropertiesPagination}
     * @memberof SpecificProperties
     */
    'pagination': SpecificPropertiesPagination;
    /**
     * 
     * @type {SpecificPropertiesData}
     * @memberof SpecificProperties
     */
    'data': SpecificPropertiesData;
}

