/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './building-storeys';
import { ConversionMethod } from './conversion-method';
import { OpeningElements } from './opening-elements';
import { Spaces } from './spaces';

/**
 * 
 * @export
 * @interface JobSvfOutputFormatAdvancedIFC
 */
export interface JobSvfOutputFormatAdvancedIFC {
    /**
     * 
     * @type {ConversionMethod}
     * @memberof JobSvfOutputFormatAdvancedIFC
     */
    'conversionMethod'?: ConversionMethod;
    /**
     * 
     * @type {BuildingStoreys}
     * @memberof JobSvfOutputFormatAdvancedIFC
     */
    'buildingStoreys'?: BuildingStoreys;
    /**
     * 
     * @type {Spaces}
     * @memberof JobSvfOutputFormatAdvancedIFC
     */
    'spaces'?: Spaces;
    /**
     * 
     * @type {OpeningElements}
     * @memberof JobSvfOutputFormatAdvancedIFC
     */
    'openingElements'?: OpeningElements;   
}



