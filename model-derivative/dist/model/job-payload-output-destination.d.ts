import { Region } from "./region";
/**
 * Specifies where to store generated derivatives.
 * @export
 * @interface JobPayloadOutputDestination
 */
export interface JobPayloadOutputDestination {
    /**
     * Specifies where to store generated derivatives. Possible values:  - ``US``: (Default) Store derivatives at a data center in the United States of America. - ``EMEA``: Store derivatives at a data center in the European Union.
     * @type {string}
     * @memberof JobPayloadOutputDestination
     */
    'region'?: Region;
}
