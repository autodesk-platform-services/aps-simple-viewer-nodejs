/* tslint:disable */
/* eslint-disable */


/**
 * An object describing the attributes of the source design.
 * @export
 * @interface JobPayloadInput
 */
export interface JobPayloadInput {
    /**
     * The URL safe Base64 encoded URN of the source design.   **Note:** The URN is returned as the ``objectID`` once you complete uploading the source design to APS. This value must be converted to a `Base64 (URL Safe) encoded <http://www.freeformatter.com/base64-encoder.html>`_ string before you can specify it for this attribute. 
     * @type {string}
     * @memberof JobPayloadInput
     */
    'urn': string;
    /**
     * - ``true``: The source design is compressed as a zip file. If set to `true`, you need to define the `rootFilename`.\' - ``false``: (Default) The source design is not compressed. 
     * @type {boolean}
     * @memberof JobPayloadInput
     */
    'compressedUrn'?: boolean;
    /**
     * The file name of the top-level component of the source design.  Mandatory if  ``compressedUrn`` is set to `true`.
     * @type {string}
     * @memberof JobPayloadInput
     */
    'rootFilename'?: string;
    /**
     * - ``true`` - Instructs the server to check for references and download all referenced files. If the design consists of multiple files (as with Autodesk Inventor assemblies) the translation job fails if this attribute is not set to ``true``. - ``false`` - (Default) Does not check for any references.
     * @type {boolean}
     * @memberof JobPayloadInput
     */
    'checkReferences'?: boolean;
}

