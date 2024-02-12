import { AllPropertiesData } from './all-properties-data';
/**
 *
 * @export
 * @interface AllProperties
 */
export declare class AllProperties {
    private _isProcessing;
    constructor(isProcessing: boolean);
    get isProcessing(): boolean;
    set isProcessing(value: boolean);
    /**
     *
     * @type {AllPropertiesData}
     * @memberof AllProperties
     */
    'data': AllPropertiesData;
}
