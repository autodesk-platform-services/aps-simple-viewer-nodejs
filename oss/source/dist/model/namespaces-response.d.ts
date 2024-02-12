/**
 *
 * @export
 * @interface NamespacesResponse
 */
export interface NamespacesResponse {
    /**
     * The bucket key.
     * @type {string}
     * @memberof NamespacesResponse
     */
    'bucketKey': string;
    /**
     * An array of names representing the namespaces assigned to this bucket after the operation.
     * @type {Array<string>}
     * @memberof NamespacesResponse
     */
    'namespaces': Array<string>;
}
