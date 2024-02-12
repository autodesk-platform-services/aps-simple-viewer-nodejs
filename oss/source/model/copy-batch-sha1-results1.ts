/* tslint:disable */
/* eslint-disable */

import { ObjectDetails } from './object-details';

/**
 * 
 * @export
 * @interface CopyBatchSha1Results1
 */
export interface CopyBatchSha1Results1 {
    /**
     * The SHA-1 hash of the source object
     * @type {string}
     * @memberof CopyBatchSha1Results1
     */
    'from'?: string;
    /**
     * The key of the destination object
     * @type {string}
     * @memberof CopyBatchSha1Results1
     */
    'to'?: string;
    /**
     * 
     * @type {ObjectDetails}
     * @memberof CopyBatchSha1Results1
     */
    'result'?: ObjectDetails;
}

