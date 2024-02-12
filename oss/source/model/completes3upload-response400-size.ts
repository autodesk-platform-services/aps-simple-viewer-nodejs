/* tslint:disable */
/* eslint-disable */


/**
 * Describes any discrepancy between the expected object size provided by the user, and the actual object size detected in S3. This check is skipped entirely if the user provides to size parameter in the request.
 * @export
 * @interface Completes3uploadResponse400Size
 */
export interface Completes3uploadResponse400Size {
    /**
     * The expected object size provided in the request, in bytes.
     * @type {number}
     * @memberof Completes3uploadResponse400Size
     */
    'expected'?: number;
    /**
     * The actual size of the object in S3, in bytes.
     * @type {number}
     * @memberof Completes3uploadResponse400Size
     */
    'detected'?: number;
}

