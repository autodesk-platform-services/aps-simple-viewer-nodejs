import { ObjectTreeDataObjectsObjectsObjectsObjects } from './object-tree-data-objects-objects-objects-objects';
/**
 *
 * @export
 * @interface ObjectTreeDataObjectsObjectsObjects
 */
export interface ObjectTreeDataObjectsObjectsObjects {
    /**
     * A non-persistent ID that is assigned to an object at translation time.
     * @type {number}
     * @memberof ObjectTreeDataObjectsObjectsObjects
     */
    'objectid': number;
    /**
     * Name of the object
     * @type {string}
     * @memberof ObjectTreeDataObjectsObjectsObjects
     */
    'name': string;
    /**
     *
     * @type {Set<ObjectTreeDataObjectsObjectsObjectsObjects>}
     * @memberof ObjectTreeDataObjectsObjectsObjects
     */
    'objects'?: Set<ObjectTreeDataObjectsObjectsObjectsObjects>;
}
