import { ManifestDerivativesChildren } from './manifest-derivatives-children';
/**
 *
 * @export
 * @interface ManifestDerivatives
 */
export interface ManifestDerivatives {
    /**
     * - ``true``: Derivative has a thumbnail. - ``false``: Derivative has no thumbnail.
     * @type {string}
     * @memberof ManifestDerivatives
     */
    'hasThumbnail': string;
    /**
     * An array of objects, where each object represents a resource file generated for the derivative during translation. For example, a Model View (Viewable) of the source design.
     * @type {Set<ManifestDerivativesChildren>}
     * @memberof ManifestDerivatives
     */
    'children'?: Set<ManifestDerivativesChildren>;
    /**
     * Name of the derivative.
     * @type {string}
     * @memberof ManifestDerivatives
     */
    'name': string;
    /**
     * How far the translation job generating this derivative has progressed. Possible values: ``complete``, ``##%``.
     * @type {string}
     * @memberof ManifestDerivatives
     */
    'progress': string;
    /**
     * The file type/format of the derivative. Possible values: ``dwg``, ``fbx``, ``ifc``, ``iges``, ``obj`` , ``step``, ``stl``, ``svf``, ``svf2``,  ``thumbnail``.
     * @type {string}
     * @memberof ManifestDerivatives
     */
    'outputType': string;
    /**
     * Status of the translation job generating this derivative. Possible values: ``pending``, ``inprogress``, ``success``, ``failed``, ``timeout``
     * @type {string}
     * @memberof ManifestDerivatives
     */
    'status': string;
}
