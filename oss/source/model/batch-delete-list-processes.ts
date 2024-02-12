/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface BatchDeleteListProcesses
 */
export interface BatchDeleteListProcesses {
    /**
     * The ID of the batch delete process.
     * @type {string}
     * @memberof BatchDeleteListProcesses
     */
    'uuid': string;
    /**
     * The ISO8601 date in which the process was created.
     * @type {string}
     * @memberof BatchDeleteListProcesses
     */
    'created': string;
    /**
     * The ISO8601 date in which the actual deletion process was initiated.
     * @type {string}
     * @memberof BatchDeleteListProcesses
     */
    'initiated'?: string;
    /**
     * The ISO8601 date in which the process was completed.
     * @type {string}
     * @memberof BatchDeleteListProcesses
     */
    'completed'?: string;
    /**
     * The state of the batch deletion process; can be \'CREATED\' (scheduled but not started), \'INITIATED\' (started but deletion not completed), or \'COMPLETED\' (deletion complete, full report of results should be available)
     * @type {string}
     * @memberof BatchDeleteListProcesses
     */
    'status': BatchDeleteListProcessesStatusEnum;
    /**
     * The URL to poll to check for completion. Will return 200 OK when process is completed and 404 NOT FOUND otherwise. This should be taken as an opaque URL with no expected pattern as it could be subject to change.
     * @type {string}
     * @memberof BatchDeleteListProcesses
     */
    'poll': string;
}

export const BatchDeleteListProcessesStatusEnum = {
    Created: 'CREATED',
    Initiated: 'INITIATED',
    Completed: 'COMPLETED'
} as const;

export type BatchDeleteListProcessesStatusEnum = typeof BatchDeleteListProcessesStatusEnum[keyof typeof BatchDeleteListProcessesStatusEnum];


