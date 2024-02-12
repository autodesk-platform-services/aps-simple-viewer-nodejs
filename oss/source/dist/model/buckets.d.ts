import { BucketsItems } from './buckets-items';
/**
 * buckets json response
 * @export
 * @interface Buckets
 */
export interface Buckets {
    /**
     * Array of items representing the buckets
     * @type {Array<BucketsItems>}
     * @memberof Buckets
     */
    'items': Array<BucketsItems>;
    /**
     * Next possible request
     * @type {string}
     * @memberof Buckets
     */
    'next': string;
}
