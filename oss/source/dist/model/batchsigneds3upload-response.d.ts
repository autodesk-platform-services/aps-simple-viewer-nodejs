import { Batchsigneds3uploadResponseResultsValue } from './batchsigneds3upload-response-results-value';
/**
 *
 * @export
 * @interface Batchsigneds3uploadResponse
 */
export interface Batchsigneds3uploadResponse {
    /**
     *
     * @type {{ [key: string]: Batchsigneds3uploadResponseResultsValue; }}
     * @memberof Batchsigneds3uploadResponse
     */
    'results': {
        [key: string]: Batchsigneds3uploadResponseResultsValue;
    };
}
