/* tslint:disable */
/* eslint-disable */


/**
 * Enum for scopes
 * @export
 * @enum {string}
 */

export const Scopes = {
    UserProfileread: 'user-profile:read',
    Userread: 'user:read',
    Userwrite: 'user:write',
    Viewablesread: 'viewables:read',
    Dataread: 'data:read',
    Datawrite: 'data:write',
    Datacreate: 'data:create',
    Datasearch: 'data:search',
    Bucketcreate: 'bucket:create',
    Bucketread: 'bucket:read',
    Bucketupdate: 'bucket:update',
    Bucketdelete: 'bucket:delete',
    Codeall: 'code:all',
    Accountread: 'account:read',
    Accountwrite: 'account:write',
    Openid: 'openid'
} as const;

export type Scopes = typeof Scopes[keyof typeof Scopes];



