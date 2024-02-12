/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const ObjectStatusEnum = {
    Complete: 'complete',
    Chunked: 'chunked',
    Fallback: 'fallback'
} as const;

export type ObjectStatusEnum = typeof ObjectStatusEnum[keyof typeof ObjectStatusEnum];



