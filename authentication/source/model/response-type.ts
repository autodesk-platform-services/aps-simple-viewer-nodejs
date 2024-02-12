/**
 * Enum for Response type
 * @export
 * @enum {string}
 */

export const ResponseType = {
    Code: 'code',
    Id_token: 'id_token'     
} as const;

export type ResponseType = typeof ResponseType[keyof typeof ResponseType];


