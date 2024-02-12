import { JobDwgOutputFormatAdvanced } from './job-dwg-output-format-advanced';
import { Type } from './type';
/**
 * A JSON object representing the requested output types.
 * @export
 * @interface JobDwgOutputFormat
 */
export interface JobDwgOutputFormat {
    /**
     *
     * @type {Type.dwg}
     * @memberof JobDwgOutputFormat
     */
    'type': typeof Type.Dwg;
    /**
     *
     * @type {JobDwgOutputFormatAdvanced}
     * @memberof JobDwgOutputFormat
     */
    'advanced'?: JobDwgOutputFormatAdvanced;
}
