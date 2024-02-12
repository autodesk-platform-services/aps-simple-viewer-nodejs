/**
 *
 * @export
 * @interface ManifestDerivativesChildren
 */
export interface ManifestDerivativesChildren {
    /**
     * The name of the phase the entity was generated from.  This attribute is present only on Model Views (Viewables) generated from a Revit source design.
     * @type {string}
     * @memberof ManifestDerivativesChildren
     */
    'phaseNames': string;
    /**
     *
     * @type {string}
     * @memberof ManifestDerivativesChildren
     */
    'role': string;
    /**
     *
     * @type {string}
     * @memberof ManifestDerivativesChildren
     */
    'hasThumbnail': string;
    /**
     * An optional array of objects, where each object (of type ``children``) represents another resource file generated for this resource.
     * @type {Set<ManifestDerivativesChildren>}
     * @memberof ManifestDerivativesChildren
     */
    'children'?: Set<ManifestDerivativesChildren>;
    /**
     * The name of the resource file.
     * @type {string}
     * @memberof ManifestDerivativesChildren
     */
    'name': string;
    /**
     * An ID that uniquely identifies the resource file.
     * @type {string}
     * @memberof ManifestDerivativesChildren
     */
    'guid': string;
    /**
     *
     * @type {string}
     * @memberof ManifestDerivativesChildren
     */
    'progress': string;
    /**
     * File type of the resource file.
     * @type {string}
     * @memberof ManifestDerivativesChildren
     */
    'type': string;
    /**
     *
     * @type {string}
     * @memberof ManifestDerivativesChildren
     */
    'viewableID': string;
    /**
     * Status of the translation job generating this resource file; Possible values:  ``pending``, ``inprogress``, ``success``, ``failed``, ``timeout``
     * @type {string}
     * @memberof ManifestDerivativesChildren
     */
    'status': string;
    /**
     * - ``true``: The resource file is a Model View (Viewable) of a Revit Master View. It contains room and space information.  This attribute is present only if:  - The derivative is SVF or SVF2. - The source design is a Revit file - The ``generateMasterViews``  advanced option was set to ``true`` when `Submit Translation Job </en/docs/model-derivative/v2/reference/http/job-POST/>`_ was called.
     * @type {boolean}
     * @memberof ManifestDerivativesChildren
     */
    'isMasterView'?: boolean;
}
