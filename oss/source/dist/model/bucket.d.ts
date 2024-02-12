import { Permission } from './permission';
/**
 *
 * @export
 * @interface Bucket
 */
export interface Bucket {
    /**
     * The key of the Bucket
     * @type {string}
     * @memberof Bucket
     */
    'bucketKey'?: string;
    /**
     * The owner of the Bucket
     * @type {string}
     * @memberof Bucket
     */
    'bucketOwner'?: string;
    /**
     * The epoch time at which the bucket was created
     * @type {string}
     * @memberof Bucket
     */
    'createdDate'?: string;
    /**
     *
     * @type {Array<Permission>}
     * @memberof Bucket
     */
    'permissions'?: Array<Permission>;
    /**
     * The policy key
     * @type {string}
     * @memberof Bucket
     */
    'policyKey'?: string;
}
