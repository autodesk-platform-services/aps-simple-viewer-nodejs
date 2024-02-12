/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface JobSvf2OutputFormatAdvancedNWD
 */
export interface JobSvf2OutputFormatAdvancedNWD {
     /**
     * Specifies whether hidden objects must be extracted or not. true: Extract hidden objects from the input file. false: (Default) Do not extract hidden objects from the input file. 
     * @type {boolean}
     * @memberof JobSvf2OutputFormatAdvancedNWD
     */
    'hiddenObjects'?: boolean;
    /**
     * Specifies whether basic material properties must be extracted or not. true: Extract properties for basic materials. false: (Default) Do not extract properties for basic materials. 
     * @type {boolean}
     * @memberof JobSvf2OutputFormatAdvancedNWD
     */
    'basicMaterialProperties'?: boolean;
    /**
     * Specifies how to handle Autodesk material properties. true: Extract properties for Autodesk materials. false: (Default) Do not extract properties for Autodesk materials.
     * @type {boolean}
     * @memberof JobSvf2OutputFormatAdvancedNWD
     */
    'autodeskMaterialProperties'?: boolean;
    /**
     * Specifies whether timeliner properties must be extracted or not. true: Extract timeliner properties. false: (Default) Do not extract timeliner properties.
     * @type {boolean}
     * @memberof JobSvf2OutputFormatAdvancedNWD
     */
    'timelinerProperties'?: boolean;    
}



