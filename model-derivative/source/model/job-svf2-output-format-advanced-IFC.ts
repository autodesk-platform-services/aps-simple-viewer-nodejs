/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './building-storeys';
import { ConversionMethod } from './conversion-method';
import { OpeningElements } from './opening-elements';
import { Spaces } from './spaces';

/**
 * 
 * @export
 * @interface JobSvf2OutputFormatAdvancedIFC
 */
export interface JobSvf2OutputFormatAdvancedIFC {
    /**
     * 
     * @type {ConversionMethod}
     * @memberof JobSvf2OutputFormatAdvancedIFC
     */
    'conversionMethod'?: ConversionMethod;
    /**
     * 
     * @type {BuildingStoreys}
     * @memberof JobSvf2OutputFormatAdvancedIFC
     */
    'buildingStoreys'?: BuildingStoreys;
    /**
     * 
     * @type {Spaces}
     * @memberof JobSvf2OutputFormatAdvancedIFC
     */
    'spaces'?: Spaces;
    /**
     * 
     * @type {OpeningElements}
     * @memberof JobSvf2OutputFormatAdvancedIFC
     */
    'openingElements'?: OpeningElements;   
}



