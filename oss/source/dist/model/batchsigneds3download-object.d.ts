import { Batchsigneds3downloadObjectRequests } from './batchsigneds3download-object-requests';
/**
 *
 * @export
 * @interface Batchsigneds3downloadObject
 */
export interface Batchsigneds3downloadObject {
    /**
     * An array of objects, one for each object for which to generate a download signed URL.
     * @type {Array<Batchsigneds3downloadObjectRequests>}
     * @memberof Batchsigneds3downloadObject
     */
    'requests': Array<Batchsigneds3downloadObjectRequests>;
}
