/* tslint:disable */
/* eslint-disable */

import { JobPayloadInput } from './job-payload-input';
import { JobPayloadMisc } from './job-payload-misc';
import { JobPayloadOutput } from './job-payload-output';

/**
 * 
 * @export
 * @interface JobPayload
 */
export interface JobPayload {
    /**
     * 
     * @type {JobPayloadInput}
     * @memberof JobPayload
     */
    'input': JobPayloadInput;
    /**
     * 
     * @type {JobPayloadOutput}
     * @memberof JobPayload
     */
    'output': JobPayloadOutput;
    /**
     * 
     * @type {JobPayloadMisc}
     * @memberof JobPayload
     */
    'misc'?: JobPayloadMisc;
}

