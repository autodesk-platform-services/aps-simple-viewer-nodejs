/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Payload = {
    Text: 'text',
    Unit: 'unit'
} as const;

export type Payload = typeof Payload[keyof typeof Payload];



