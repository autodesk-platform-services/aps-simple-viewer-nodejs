/**
 * Enum for GrantType
 * @export
 * @enum {string}
 */

export const GrantType = {
    Client_credentials: 'client_credentials',
    Authorization_code: 'authorization_code',
    Refresh_token: 'refresh_token'  
} as const;

export type GrantType = typeof GrantType[keyof typeof GrantType];


