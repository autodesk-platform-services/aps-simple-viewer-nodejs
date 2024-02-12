/**
 *
 * @export
 * @interface BatchCopyObjects
 */
export interface BatchCopyObjects {
    /**
     * The key to be given to the copied object.
     * @type {string}
     * @memberof BatchCopyObjects
     */
    'objectKey': string;
    /**
     * The SHA-1 hash of the object to be copied.
     * @type {string}
     * @memberof BatchCopyObjects
     */
    'sha1': string;
}
