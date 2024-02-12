/**
 *
 * @export
 * @interface BatchDeleteResults
 */
export interface BatchDeleteResults {
    /**
     * The ID of the created process.
     * @type {string}
     * @memberof BatchDeleteResults
     */
    'uuid': string;
    /**
     * The ISO8601 date in which the process was created.
     * @type {string}
     * @memberof BatchDeleteResults
     */
    'created': string;
    /**
     * The state of the process. Will always be \'CREATED\'.
     * @type {string}
     * @memberof BatchDeleteResults
     */
    'status': string;
    /**
     * The URL to poll to check for completion. That URL will return 200 OK when the process is completed, and 404 NOT FOUND otherwise. This should be taken as an opaque URL with no expected pattern, as it could be subject to change.
     * @type {string}
     * @memberof BatchDeleteResults
     */
    'poll': string;
}
