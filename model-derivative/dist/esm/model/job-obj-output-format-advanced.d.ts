import { ExportFileStructure } from './export-file-structure';
import { Unit } from './unit';
/**
 * Advanced options for `obj` type.
 * @export
 * @interface JobObjOutputFormatAdvanced
 */
export interface JobObjOutputFormatAdvanced {
    /**
     *
     * @type {ExportFileStructure}
     * @memberof JobObjOutputFormatAdvanced
     */
    'exportFileStructure'?: ExportFileStructure;
    /**
     *
     * @type {Unit}
     * @memberof JobObjOutputFormatAdvanced
     */
    'unit'?: Unit;
    /**
     * Required for geometry extractions. The Model View ID (guid).
     * @type {string}
     * @memberof JobObjOutputFormatAdvanced
     */
    'modelGuid'?: string;
    /**
     * Required for geometry extractions. List object ids to be translated. -1 will extract the entire model.
     * @type {Array<number>}
     * @memberof JobObjOutputFormatAdvanced
     */
    'objectIds'?: Array<number>;
}
