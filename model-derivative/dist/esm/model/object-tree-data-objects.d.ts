/**
 *
 * @export
 * @interface ObjectTreeDataObjects
 */
export interface ObjectTreeDataObjects {
    /**
     * A non-persistent ID that is assigned to an object at translation time.
     * @type {number}
     * @memberof ObjectTreeDataObjects
     */
    'objectid': number;
    /**
     * Name of the object.
     * @type {string}
     * @memberof ObjectTreeDataObjects
     */
    'name': string;
    /**
     * Optional collection of \"children\" objects within the hierarchy.
     * @type {Set<ObjectTreeDataObjectsObjects>}
     * @memberof ObjectTreeDataObjects
     */
    'objects'?: Set<ObjectTreeDataObjects>;
}
