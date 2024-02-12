/* tslint:disable */
/* eslint-disable */

import { Role } from './role';

/**
 * An array of flat JSON objects representing metadata.
 * @export
 * @interface ModelViewsDataMetadata
 */
export interface ModelViewsDataMetadata {
    /**
     * Name of the Model View.
     * @type {string}
     * @memberof ModelViewsDataMetadata
     */
    'name': string;
    /**
     * Unique ID for the Model View.
     * @type {string}
     * @memberof ModelViewsDataMetadata
     */
    'guid': string;
    /**
     * 
     * @type {Role}
     * @memberof ModelViewsDataMetadata
     */
    'role': Role;
    /**
     * ``true``: Model View is a Master View derived from a Revit file.  ``false``: Model View is not a Master View.
     * @type {boolean}
     * @memberof ModelViewsDataMetadata
     */
    'isMasterView': boolean;
}



