/* tslint:disable */
/* eslint-disable */

import { CreateObjectGrantPermissions } from './create-object-grant-permissions';

/**
 * Object grant Object json response
 * @export
 * @interface CreateObjectGrant
 */
export interface CreateObjectGrant {
    /**
     * Applications with access granted at creation time
     * @type {Array<CreateObjectGrantPermissions>}
     * @memberof CreateObjectGrant
     */
    'permissions': Array<CreateObjectGrantPermissions>;
}

