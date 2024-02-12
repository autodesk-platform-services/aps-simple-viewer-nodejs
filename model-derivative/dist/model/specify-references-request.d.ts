import { Region } from './region';
import { SpecifyReferencesRequestReferences } from './specify-references-request-references';
/**
 *
 * @export
 * @interface SpecifyReferencesRequest
 */
export interface SpecifyReferencesRequest {
    /**
     * The URN of the top level component of the design. Mandatory if the Base64 encoded urn in the request URL is a logical URN.
     * @type {string}
     * @memberof SpecifyReferencesRequest
     */
    'urn': string;
    /**
     *
     * @type {Region}
     * @memberof SpecifyReferencesRequest
     */
    'region'?: Region;
    /**
     * The file name of the top level component. By default, it is set to ``\"\"`` and the file will be download with its ``urn``.
     * @type {string}
     * @memberof SpecifyReferencesRequest
     */
    'filename': string;
    /**
     * An array of objects, where each object represents a referenced file.
     * @type {Set<SpecifyReferencesRequestReferences>}
     * @memberof SpecifyReferencesRequest
     */
    'references': Set<SpecifyReferencesRequestReferences>;
}
