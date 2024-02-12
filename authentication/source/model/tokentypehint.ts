/* tslint:disable */
/* eslint-disable */


/**
 * Enum for Token type hint
 * @export
 * @enum {string}
 */

export const TokenTypeHint = {
    Access_token: 'access_token',
    Refresh_token: 'refresh_token'  
} as const;

export type TokenTypeHint = typeof TokenTypeHint[keyof typeof TokenTypeHint];



