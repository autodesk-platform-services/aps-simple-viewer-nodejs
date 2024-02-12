import { BatchObjectDetailsObjects } from './batch-object-details-objects';
/**
 *
 * @export
 * @interface BatchObjectDetails
 */
export interface BatchObjectDetails {
    /**
     * Key of the bucket containing all the objects
     * @type {string}
     * @memberof BatchObjectDetails
     */
    'bucketKey'?: string;
    /**
     * Array of the information about each object.
     * @type {Array<BatchObjectDetailsObjects>}
     * @memberof BatchObjectDetails
     */
    'objects'?: Array<BatchObjectDetailsObjects>;
}
