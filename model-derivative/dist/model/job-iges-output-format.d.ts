import { JobIgesOutputFormatAdvanced } from './job-iges-output-format-advanced';
import { Type } from './type';
/**
 *
 * @export
 * @interface JobIgesOutputFormat
 */
export interface JobIgesOutputFormat {
    /**
     *
     * @type {Type.Iges}
     * @memberof JobIgesOutputFormat
     */
    'type': typeof Type.Iges;
    /**
     *
     * @type {JobIgesOutputFormatAdvanced}
     * @memberof JobIgesOutputFormat
     */
    'advanced'?: JobIgesOutputFormatAdvanced;
}
