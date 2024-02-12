import { ObjectTreeDataObjectsObjectsObjects } from './object-tree-data-objects-objects-objects';
/**
 *
 * @export
 * @interface ObjectTreeDataObjectsObjects
 */
export interface ObjectTreeDataObjectsObjects {
    /**
     * A non-persistent ID that is assigned to an object at translation time.
     * @type {number}
     * @memberof ObjectTreeDataObjectsObjects
     */
    'objectid': number;
    /**
     * Name of the object
     * @type {string}
     * @memberof ObjectTreeDataObjectsObjects
     */
    'name': string;
    /**
     *
     * @type {Set<ObjectTreeDataObjectsObjectsObjects>}
     * @memberof ObjectTreeDataObjectsObjects
     */
    'objects'?: Set<ObjectTreeDataObjectsObjectsObjects>;
}
