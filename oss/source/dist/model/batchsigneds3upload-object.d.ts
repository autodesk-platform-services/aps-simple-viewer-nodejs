import { Batchsigneds3uploadObjectRequests } from './batchsigneds3upload-object-requests';
/**
 *
 * @export
 * @interface Batchsigneds3uploadObject
 */
export interface Batchsigneds3uploadObject {
    /**
     * An array of objects, each of which represents a signed URL / URLs to retrieve.
     * @type {Array<Batchsigneds3uploadObjectRequests>}
     * @memberof Batchsigneds3uploadObject
     */
    'requests': Array<Batchsigneds3uploadObjectRequests>;
}
