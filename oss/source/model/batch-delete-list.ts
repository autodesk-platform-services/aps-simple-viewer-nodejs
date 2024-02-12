/* tslint:disable */
/* eslint-disable */

import { BatchDeleteListProcesses } from './batch-delete-list-processes';

/**
 * 
 * @export
 * @interface BatchDeleteList
 */
export interface BatchDeleteList {
    /**
     * List of batch delete processes for the bucket.
     * @type {Array<BatchDeleteListProcesses>}
     * @memberof BatchDeleteList
     */
    'processes': Array<BatchDeleteListProcesses>;
}

