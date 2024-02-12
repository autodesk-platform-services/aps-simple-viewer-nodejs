/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface TransferObject
 */
export interface TransferObject {
    /**
     * Indicates whether to initiate, confirm, or cancel a transfer.
     * @type {string}
     * @memberof TransferObject
     */
    'operation': TransferObjectOperationEnum;
    /**
     * The key to which ownership of the bucket should be transferred. Required for the\'initiate\' operation, should not be provided otherwise.
     * @type {string}
     * @memberof TransferObject
     */
    'key'?: string;
}

export const TransferObjectOperationEnum = {
    Initiate: 'initiate',
    Complete: 'complete',
    Cancel: 'cancel'
} as const;

export type TransferObjectOperationEnum = typeof TransferObjectOperationEnum[keyof typeof TransferObjectOperationEnum];


