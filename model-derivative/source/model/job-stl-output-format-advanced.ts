/* tslint:disable */
/* eslint-disable */

import { ExportFileStructure } from './export-file-structure';
import { Format } from './format';

/**
 * Advanced options for `stl` type.
 * @export
 * @interface JobStlOutputFormatAdvanced
 */
export interface JobStlOutputFormatAdvanced {
    /**
     * 
     * @type {Format}
     * @memberof JobStlOutputFormatAdvanced
     */
    'format'?: Format;
    /**
     * Color is exported by default. If set to `true`, color is exported. If set to `false`, color is not exported.
     * @type {boolean}
     * @memberof JobStlOutputFormatAdvanced
     */
    'exportColor'?: boolean;
    /**
     * 
     * @type {ExportFileStructure}
     * @memberof JobStlOutputFormatAdvanced
     */
    'exportFileStructure'?: ExportFileStructure;
}



