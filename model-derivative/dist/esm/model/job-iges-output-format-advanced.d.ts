import { SheetType } from './sheet-type';
import { SolidType } from './solid-type';
import { SurfaceType } from './surface-type';
/**
 * Advanced options for `iges` type.
 * @export
 * @interface JobIgesOutputFormatAdvanced
 */
export interface JobIgesOutputFormatAdvanced {
    /**
     * Possible values are between `0` and `1`. By default it is set at 0.001.
     * @type {number}
     * @memberof JobIgesOutputFormatAdvanced
     */
    'tolerance'?: number;
    /**
     *
     * @type {SurfaceType}
     * @memberof JobIgesOutputFormatAdvanced
     */
    'surfaceType'?: SurfaceType;
    /**
     *
     * @type {SheetType}
     * @memberof JobIgesOutputFormatAdvanced
     */
    'sheetType'?: SheetType;
    /**
     *
     * @type {SolidType}
     * @memberof JobIgesOutputFormatAdvanced
     */
    'solidType'?: SolidType;
}
