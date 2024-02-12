/* tslint:disable */
/* eslint-disable */

import { RevokeRevoke } from './revoke-revoke';

/**
 * revoke definition
 * @export
 * @interface Revoke
 */
export interface Revoke {
    /**
     * Objects representing applications to which the owner wants to grant access at bucket creation time
     * @type {Array<RevokeRevoke>}
     * @memberof Revoke
     */
    'revoke': Array<RevokeRevoke>;
}

