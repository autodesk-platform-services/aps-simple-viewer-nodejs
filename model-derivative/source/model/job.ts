/* tslint:disable */
/* eslint-disable */

import { JobAcceptedJobs } from './job-accepted-jobs';

/**
 * 
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * reporting success status
     * @type {string}
     * @memberof Job
     */
    'result': string;
    /**
     * the urn identifier of the source file
     * @type {string}
     * @memberof Job
     */
    'urn': string;
    /**
     * 
     * @type {JobAcceptedJobs}
     * @memberof Job
     */
    'acceptedJobs': JobAcceptedJobs;
}

