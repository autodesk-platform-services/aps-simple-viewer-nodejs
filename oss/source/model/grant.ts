/* tslint:disable */
/* eslint-disable */

import { GrantAllow } from './grant-allow';

/**
 * grant definition
 * @export
 * @interface Grant
 */
export interface Grant {
    /**
     * Objects representing applications to which the owner wants to grant access
     * @type {Array<GrantAllow>}
     * @memberof Grant
     */
    'allow': Array<GrantAllow>;
}

