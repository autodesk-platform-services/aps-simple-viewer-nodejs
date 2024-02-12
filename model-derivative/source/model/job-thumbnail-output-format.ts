/* tslint:disable */
/* eslint-disable */

import { JobThumbnailOutputFormatAdvanced } from './job-thumbnail-output-format-advanced';
import { Type } from './type';
/**
 * 
 * @export
 * @interface JobThumbnailOutputFormat
 */
export interface JobThumbnailOutputFormat {
    /**
     * 
     * @type {Type.thumbnail}
     * @memberof JobThumbnailOutputFormat
     */
    'type': typeof Type.Thumbnail;
    /**
     * 
     * @type {JobThumbnailOutputFormatAdvanced}
     * @memberof JobThumbnailOutputFormat
     */
    'advanced'?: JobThumbnailOutputFormatAdvanced;
}

