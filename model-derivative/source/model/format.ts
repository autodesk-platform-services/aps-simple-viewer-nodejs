/* tslint:disable */
/* eslint-disable */


/**
 * Default format is `binary`. Possible values are `binary` or `ascii`.
 * @export
 * @enum {string}
 */

export const Format = {
    Binary: 'binary',
    Ascii: 'ascii'
} as const;

export type Format = typeof Format[keyof typeof Format];



