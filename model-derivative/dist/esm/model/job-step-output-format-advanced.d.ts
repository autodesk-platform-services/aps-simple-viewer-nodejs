import { ApplicationProtocol } from './application-protocol';
/**
 * Advanced options for `step` type.
 * @export
 * @interface JobStepOutputFormatAdvanced
 */
export interface JobStepOutputFormatAdvanced {
    /**
     *
     * @type {ApplicationProtocol}
     * @memberof JobStepOutputFormatAdvanced
     */
    'applicationProtocol'?: ApplicationProtocol;
    /**
     * Possible values are between `0` and `1`. By default it is set at 0.001.
     * @type {number}
     * @memberof JobStepOutputFormatAdvanced
     */
    'tolerance'?: number;
}
