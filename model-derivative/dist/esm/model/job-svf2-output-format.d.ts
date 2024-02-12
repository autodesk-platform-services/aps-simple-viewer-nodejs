import { JobSvf2OutputFormatAdvanced } from './job-svf2-output-format-advanced';
import { View } from './view';
import { Type } from './type';
/**
 *
 * @export
 * @interface JobSvf2OutputFormat
 */
export interface JobSvf2OutputFormat {
    /**
     *
     * @type {Array<View>}
     * @memberof JobSvf2OutputFormat
     */
    'views': Array<View>;
    /**
     *
     * @type {Type.Svf2}
     * @memberof JobSvf2OutputFormat
     */
    'type': typeof Type.Svf2;
    /**
     *
     * @type {JobSvfOutputFormatAdvanced}
     * @memberof JobSvf2OutputFormat
     */
    'advanced'?: JobSvf2OutputFormatAdvanced;
}
