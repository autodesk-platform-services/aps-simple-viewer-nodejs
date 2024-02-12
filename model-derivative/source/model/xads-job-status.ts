/* tslint:disable */
/* eslint-disable */


/**
 * The job status of current design  Possible values: inprogress, success, failed, timedout
 * @export
 * @enum {string}
 */

export const XAdsJobStatus = {
    Inprogress: 'inprogress',
    Success: 'success',
    Failed: 'failed',
    Timedout: 'timedout'
} as const;

export type XAdsJobStatus = typeof XAdsJobStatus[keyof typeof XAdsJobStatus];



