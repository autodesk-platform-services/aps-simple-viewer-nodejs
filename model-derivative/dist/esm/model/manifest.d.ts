import { ManifestDerivatives } from './manifest-derivatives';
/**
 *
 * @export
 * @interface Manifest
 */
export interface Manifest {
    /**
     * The URL-safe Base64 encoded URN of the source design.
     * @type {string}
     * @memberof Manifest
     */
    'urn': string;
    /**
     * An array of objects, where each object represents a derivative of the source design.
     * @type {Set<ManifestDerivatives>}
     * @memberof Manifest
     */
    'derivatives': Set<ManifestDerivatives>;
    /**
     * - ``true``: There is a thumbnail for the source design. - ``false``: There is no thumbnail for the source design.
     * @type {string}
     * @memberof Manifest
     */
    'hasThumbnail': string;
    /**
     * Overall progress of all translation jobs for the source design. Possible values: ``complete``, ``##%``.
     * @type {string}
     * @memberof Manifest
     */
    'progress': string;
    /**
     * The type of data that is returned. Always ``manifest``.
     * @type {string}
     * @memberof Manifest
     */
    'type': string;
    /**
     * The region where the source design and its derivatives are stored. Possible values: ``US``, ``EMEA``.
     * @type {string}
     * @memberof Manifest
     */
    'region': string;
    /**
     *
     * @type {string}
     * @memberof Manifest
     */
    'version': string;
    /**
     * Overall status of all translation jobs for the source design. Possible values: ``pending``, ``success``, ``inprogress``, ``failed``, ``timeout``.
     * @type {string}
     * @memberof Manifest
     */
    'status': string;
}
