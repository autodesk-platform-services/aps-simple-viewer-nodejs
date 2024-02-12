import { BatchcompleteuploadObjectRequests } from './batchcompleteupload-object-requests';
/**
 *
 * @export
 * @interface BatchcompleteuploadObject
 */
export interface BatchcompleteuploadObject {
    /**
     * An array of objects, each of which represents an upload to complete.
     * @type {Array<BatchcompleteuploadObjectRequests>}
     * @memberof BatchcompleteuploadObject
     */
    'requests': Array<BatchcompleteuploadObjectRequests>;
}
