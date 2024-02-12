/* tslint:disable */
/* eslint-disable */

import { JobSvfOutputFormatAdvanced } from './job-svf-output-format-advanced';
import { View } from './view';
import { Type } from './type';
/**
 * 
 * @export
 * @class JobSvfOutputFormat
 */
export interface JobSvfOutputFormat {
    /**
     * 
     * @type {Array<View>}
     * @memberof JobSvfOutputFormat
     */
    'views': Array<View>;
    /**
     * 
     * @type {Type.Svf}
     * @memberof JobSvfOutputFormat
     */
    'type': typeof Type.Svf;
     /**
     * 
     * @type {JobSvfOutputFormatAdvanced}
     * @memberof JobSvfOutputFormat
     */
    'advanced'?: JobSvfOutputFormatAdvanced;
}


