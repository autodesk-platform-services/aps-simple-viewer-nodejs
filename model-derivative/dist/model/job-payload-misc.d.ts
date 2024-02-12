/**
 *
 * @export
 * @interface JobPayloadMisc
 */
export interface JobPayloadMisc {
    /**
     * The workflow id created for a webhook, used to listen to Model Derivative events. It needs to be no more than 36 chars, and only ASCII, decimal and hyphen are accepted.
     * @type {string}
     * @memberof JobPayloadMisc
     */
    'workflow'?: string;
    /**
     * A user-defined JSON object, which you can use to set some custom workflow information. It needs to be less than 1KB and will be ignored if misc.workflow parameter is not set.
     * @type {object}
     * @memberof JobPayloadMisc
     */
    'workflowAttribute'?: object;
}
