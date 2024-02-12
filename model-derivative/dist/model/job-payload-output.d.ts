import { JobPayloadFormat } from './job-payload-format';
import { JobPayloadOutputDestination } from './job-payload-output-destination';
/**
 * An object describing the attributes of the requested derivatives.
 * @export
 * @interface JobPayloadOutput
 */
export interface JobPayloadOutput {
    /**
     *
     * @type {JobPayloadOutputDestination}
     * @memberof JobPayloadOutput
     */
    'destination'?: JobPayloadOutputDestination;
    /**
     * An array of objects, where each object represents a requested derivative format. You can request multiple derivatives.
     * @type {Array<JobPayloadFormat>}
     * @memberof JobPayloadOutput
     */
    'formats': Array<JobPayloadFormat>;
}
