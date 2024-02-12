import { JobStepOutputFormatAdvanced } from './job-step-output-format-advanced';
import { Type } from './type';
/**
 *
 * @export
 * @interface JobStepOutputFormat
 */
export interface JobStepOutputFormat {
    /**
     *
     * @type {Type.Step}
     * @memberof JobStepOutputFormat
     */
    'type': typeof Type.Step;
    /**
     *
     * @type {JobStepOutputFormatAdvanced}
     * @memberof JobStepOutputFormat
     */
    'advanced'?: JobStepOutputFormatAdvanced;
}
