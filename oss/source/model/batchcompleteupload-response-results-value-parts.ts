/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface BatchcompleteuploadResponseResultsValueParts
 */
export interface BatchcompleteuploadResponseResultsValueParts {
    /**
     * The index of the part in the multipart upload.
     * @type {number}
     * @memberof BatchcompleteuploadResponseResultsValueParts
     */
    'firstPart'?: number;
    /**
     * Indicates whether this particular part uploaded to S3 is valid. Possible values are: - Pending: no part has been uploaded to S3 for this index. - Unexpected: the eTag of the part in S3 does not match the one provided in the request. - TooSmall: the chunk uploaded to S3 is smaller than 5MB, for any chunk except the final one. - Unexpected+TooSmall: the chunk is both too small and has an eTag mismatch. - Ok: The chunk has no issues.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValueParts
     */
    'status'?: BatchcompleteuploadResponseResultsValuePartsStatusEnum;
    /**
     * The size of the corresponding part detected in S3.
     * @type {number}
     * @memberof BatchcompleteuploadResponseResultsValueParts
     */
    'size'?: number;
    /**
     * The eTag of the detected part in S3.
     * @type {string}
     * @memberof BatchcompleteuploadResponseResultsValueParts
     */
    'eTag'?: string;
}

export const BatchcompleteuploadResponseResultsValuePartsStatusEnum = {
    Pending: 'Pending',
    Unexpected: 'Unexpected',
    TooSmall: 'TooSmall',
    UnexpectedTooSmall: 'Unexpected+TooSmall',
    Ok: 'Ok'
} as const;

export type BatchcompleteuploadResponseResultsValuePartsStatusEnum = typeof BatchcompleteuploadResponseResultsValuePartsStatusEnum[keyof typeof BatchcompleteuploadResponseResultsValuePartsStatusEnum];


