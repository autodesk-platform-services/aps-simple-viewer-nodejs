/* tslint:disable */
/* eslint-disable */

import { ObjectDetails } from './object-details';

/**
 * 
 * @export
 * @interface CopyBatchResults1
 */
export interface CopyBatchResults1 {
    /**
     * The key of the source object
     * @type {string}
     * @memberof CopyBatchResults1
     */
    'from'?: string;
    /**
     * The key of the destination object
     * @type {string}
     * @memberof CopyBatchResults1
     */
    'to'?: string;
    /**
     * 
     * @type {ObjectDetails}
     * @memberof CopyBatchResults1
     */
    'result'?: ObjectDetails;
}

