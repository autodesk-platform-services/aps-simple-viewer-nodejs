/* tslint:disable */
/* eslint-disable */

import { Region } from './region';
import { References } from './references';

/**
 * 
 * @export
 * @interface ReferencesPayload
 */
export interface ReferencesPayload {
    /**
     * The URN of the top level component of the design. Mandatory if the Base64 encoded urn in the request URL is a logical URN.
     * @type {string}
     * @memberof ReferencesPayload
     */
    'urn': string;
    /**
     * 
     * @type {Region}
     * @memberof ReferencesPayload
     */
    'region'?: Region;
    /**
     * The file name of the top level component. By default, it is set to ``\"\"`` and the file will be download with its ``urn``.
     * @type {string}
     * @memberof ReferencesPayload
     */
    'filename': string;
    /**
     * An array of objects, where each object represents a referenced file.
     * @type {Set<References>}
     * @memberof ReferencesPayload
     */
    'references': Set<References>;
}



