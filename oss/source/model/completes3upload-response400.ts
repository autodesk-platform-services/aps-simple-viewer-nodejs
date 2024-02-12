/* tslint:disable */
/* eslint-disable */

import { Completes3uploadResponse400Parts } from './completes3upload-response400-parts';
import { Completes3uploadResponse400Size } from './completes3upload-response400-size';

/**
 * 
 * @export
 * @interface Completes3uploadResponse400
 */
export interface Completes3uploadResponse400 {
    /**
     * Any top-level details about why the request was rejected.
     * @type {string}
     * @memberof Completes3uploadResponse400
     */
    'reason': string;
    /**
     * The identifier of the upload the user attempted to complete, if one is provided.
     * @type {string}
     * @memberof Completes3uploadResponse400
     */
    'uploadKey'?: string;
    /**
     * 
     * @type {Completes3uploadResponse400Size}
     * @memberof Completes3uploadResponse400
     */
    'size'?: Completes3uploadResponse400Size;
    /**
     * An array containing the status of each part, indicating any issues in eTag mismatch or size issues.
     * @type {Array<Completes3uploadResponse400Parts>}
     * @memberof Completes3uploadResponse400
     */
    'parts'?: Array<Completes3uploadResponse400Parts>;
}

