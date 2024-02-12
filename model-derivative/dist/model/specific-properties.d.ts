import { SpecificPropertiesData } from './specific-properties-data';
import { SpecificPropertiesPagination } from './specific-properties-pagination';
/**
 *
 * @export
 * @interface SpecificProperties
 */
export declare class SpecificProperties {
    private _isProcessing;
    constructor(isProcessing: boolean);
    get isProcessing(): boolean;
    set isProcessing(value: boolean);
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
