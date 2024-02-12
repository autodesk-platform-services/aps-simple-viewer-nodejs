import { BatchCopyObjects } from './batch-copy-objects';
/**
 *
 * @export
 * @interface BatchCopy
 */
export interface BatchCopy {
    /**
     * An array of objects indicating the objects to copy and the keys to assign to the copies.
     * @type {Array<BatchCopyObjects>}
     * @memberof BatchCopy
     */
    'objects'?: Array<BatchCopyObjects>;
}
