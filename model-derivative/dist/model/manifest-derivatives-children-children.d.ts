/**
 *
 * @export
 * @interface ManifestDerivativesChildrenChildren
 */
export interface ManifestDerivativesChildrenChildren {
    /**
     * An ID that uniquely identifies the resource file.
     * @type {string}
     * @memberof ManifestDerivativesChildrenChildren
     */
    'guid': string;
    /**
     * Type of resource this JSON object represents.
     * @type {string}
     * @memberof ManifestDerivativesChildrenChildren
     */
    'type': string;
    /**
     * File type of the resource file.
     * @type {string}
     * @memberof ManifestDerivativesChildrenChildren
     */
    'role': string;
    /**
     * The name of the resource file.
     * @type {string}
     * @memberof ManifestDerivativesChildrenChildren
     */
    'name': string;
    /**
     * Status of the translation job generating this resource file; Possible values:  ``pending``, ``inprogress``, ``success``, ``failed``, ``timeout``
     * @type {string}
     * @memberof ManifestDerivativesChildrenChildren
     */
    'status': string;
    /**
     * How far the translation job generating this resource file has progressed.
     * @type {string}
     * @memberof ManifestDerivativesChildrenChildren
     */
    'progress': string;
    /**
     *
     * @type {Array<object>}
     * @memberof ManifestDerivativesChildrenChildren
     */
    'camera'?: Array<object>;
}
