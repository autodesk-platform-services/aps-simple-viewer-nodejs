/* tslint:disable */
/* eslint-disable */

import { JobIfcOutputFormatAdvanced } from './job-ifc-output-format-advanced';
import { Type } from './type';

/**
 * A JSON object representing the requested output types.
 * @export
 * @interface JobIfcOutputFormat
 */
export interface JobIfcOutputFormat {
    /**
     * 
     * @type {Type.ifc}
     * @memberof JobIfcOutputFormat
     */
    'type':typeof Type.Ifc;
    /**
     * 
     * @type {JobIfcOutputFormatAdvanced}
     * @memberof JobIfcOutputFormat
     */
    'advanced'?: JobIfcOutputFormatAdvanced;
}

