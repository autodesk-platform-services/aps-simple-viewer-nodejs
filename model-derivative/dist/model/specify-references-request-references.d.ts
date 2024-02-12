/**
 *
 * @export
 * @interface SpecifyReferencesRequestReferences
 */
export interface SpecifyReferencesRequestReferences {
    /**
     * The URN of the referenced file.
     * @type {string}
     * @memberof SpecifyReferencesRequestReferences
     */
    'urn': string;
    /**
     * The path to the referenced file, relative to the top level component. By default, it is set to ``\"\"``, which means that the referenced file and top level component are in the same folder.
     * @type {string}
     * @memberof SpecifyReferencesRequestReferences
     */
    'relativePath': string;
    /**
     * The file name of the referenced file. By default, it is set to ``\"\"`` and the referenced file will be downloaded by its ``urn`` and placed relative to the top-level component using ``relativePath``.
     * @type {string}
     * @memberof SpecifyReferencesRequestReferences
     */
    'filename': string;
    /**
     * An object to hold custom metadata.
     * @type {object}
     * @memberof SpecifyReferencesRequestReferences
     */
    'metadata'?: object;
}
