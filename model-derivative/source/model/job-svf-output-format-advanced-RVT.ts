/* tslint:disable */
/* eslint-disable */

import { ExtractorVersion } from './extractor-version';
import { MaterialMode } from './material-mode';
import { Model2dView } from './model2d-view';


/**
 * 
 * @export
 * @interface JobSvfOutputFormatAdvancedRVT
 */
export interface JobSvfOutputFormatAdvancedRVT {
    /**
     * 
     * @type {Model2dView}
     * @memberof JobSvfOutputFormatAdvancedRVT
     */
    '_2dviews'?: Model2dView;    
    /**
     * 
     * @type {ExtractorVersion}
     * @memberof JobSvfOutputFormatAdvancedRVT
     */
    'extractorVersion'?: ExtractorVersion;
    /**
     * Generates master views when translating from the Revit input format to SVF. This option is ignored for all other input formats. This attribute defaults to false.  Master views are 3D views that are generated for each phase of the Revit model. A master view contains all elements (including “room” elements) present in the host model for that phase. The display name of a master view defaults to the name of the phase it is generated from. However, if a view with that name already exists, the Model Derivative service appends a suffix to the default display name.  Notes: 1. Master views do not contain elements from linked models. 2. Enabling this option can increase the time it takes to translate the model.
     * @type {boolean}
     * @memberof JobSvfOutputFormatAdvancedRVT
     */
    'generateMasterViews'?: boolean;
    /**
     * 
     * @type {MaterialMode}
     * @memberof JobSvfOutputFormatAdvancedRVT
     */
    'materialMode'?: MaterialMode;

}



