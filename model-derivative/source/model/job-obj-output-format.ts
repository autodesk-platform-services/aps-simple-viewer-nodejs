/* tslint:disable */
/* eslint-disable */

import { JobObjOutputFormatAdvanced } from './job-obj-output-format-advanced';
import { Type } from './type';
/**
 * 
 * @export
 * @interface JobObjOutputFormat
 */
export interface JobObjOutputFormat {
    /**
     * 
     * @type {string}
     * @memberof JobObjOutputFormat
     */
    'type': typeof Type.Obj;
    /**
     * 
     * @type {JobObjOutputFormatAdvanced}
     * @memberof JobObjOutputFormat
     */
    'advanced'?: JobObjOutputFormatAdvanced;
}

