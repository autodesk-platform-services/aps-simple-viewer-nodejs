/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface BatchDeleteDetails
 */
export interface BatchDeleteDetails {
    /**
     * The ID of the batch delete process.
     * @type {string}
     * @memberof BatchDeleteDetails
     */
    'uuid': string;
    /**
     * The ISO8601 date in which the process was created.
     * @type {string}
     * @memberof BatchDeleteDetails
     */
    'created': string;
    /**
     * The ISO8601 date in which the actual deletion process was initiated.
     * @type {string}
     * @memberof BatchDeleteDetails
     */
    'initiated'?: string;
    /**
     * The ISO8601 date in which the process was completed.
     * @type {string}
     * @memberof BatchDeleteDetails
     */
    'completed'?: string;
    /**
     * The state of the batch deletion process; can be \'CREATED\' (scheduled but not started), \'INITIATED\' (started but deletion not completed), or \'COMPLETED\' (deletion complete, full report of results should be available)
     * @type {string}
     * @memberof BatchDeleteDetails
     */
    'status': BatchDeleteDetailsStatusEnum;
    /**
     * The URL to poll to check for completion. Will return 200 OK when process is completed and 404 NOT FOUND otherwise. This should be taken as an opaque URL with no expected pattern as it could be subject to change.
     * @type {string}
     * @memberof BatchDeleteDetails
     */
    'poll': string;
    /**
     * A map from each object key in the original request, to the deletion status of that object key. The state can be \'Pending\' (object has not yet been processed), \'Deleted\' (object successfully deleted), \'NotFound\' (object not found), or \'Error\' (object could not be deleted because of an unexpected error; user may want to manually verify the object and issue a new delete request).
     * @type {object}
     * @memberof BatchDeleteDetails
     */
    'objectKeys': object;
}

export const BatchDeleteDetailsStatusEnum = {
    Created: 'CREATED',
    Initiated: 'INITIATED',
    Completed: 'COMPLETED'
} as const;

export type BatchDeleteDetailsStatusEnum = typeof BatchDeleteDetailsStatusEnum[keyof typeof BatchDeleteDetailsStatusEnum];


