import { ObjectDetails } from './object-details';
/**
 *
 * @export
 * @interface BucketObjects
 */
export interface BucketObjects {
    /**
     *
     * @type {Array<ObjectDetails>}
     * @memberof BucketObjects
     */
    'items'?: Array<ObjectDetails>;
    /**
     * Next possible request
     * @type {string}
     * @memberof BucketObjects
     */
    'next'?: string;
}
