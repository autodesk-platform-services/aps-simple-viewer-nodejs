/**
 * The job status of current design  Possible values: inprogress, success, failed, timedout
 * @export
 * @enum {string}
 */
export declare const XAdsJobStatus: {
    readonly Inprogress: "inprogress";
    readonly Success: "success";
    readonly Failed: "failed";
    readonly Timedout: "timedout";
};
export type XAdsJobStatus = typeof XAdsJobStatus[keyof typeof XAdsJobStatus];
