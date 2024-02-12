import { BatchcompleteuploadResponseResultsValue } from './batchcompleteupload-response-results-value';
/**
 *
 * @export
 * @interface BatchcompleteuploadResponse
 */
export interface BatchcompleteuploadResponse {
    /**
     * A map of the returned results; each key in the map corresponds to an object key in the batch, and the value includes the results for that object.
     * @type {{ [key: string]: BatchcompleteuploadResponseResultsValue; }}
     * @memberof BatchcompleteuploadResponse
     */
    'results'?: {
        [key: string]: BatchcompleteuploadResponseResultsValue;
    };
}
