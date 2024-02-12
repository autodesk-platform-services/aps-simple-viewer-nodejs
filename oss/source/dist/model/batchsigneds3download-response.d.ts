import { DownloadResults } from './download-results';
/**
 *
 * @export
 * @interface Batchsigneds3downloadResponse
 */
export interface Batchsigneds3downloadResponse {
    /**
     *
     * @type {{ [key: string]: DownloadResults; }}
     * @memberof Batchsigneds3downloadResponse
     */
    'results': {
        [key: string]: DownloadResults;
    };
}
