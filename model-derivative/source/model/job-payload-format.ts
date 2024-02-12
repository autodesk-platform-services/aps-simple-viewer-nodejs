/* tslint:disable */
/* eslint-disable */

import { JobDwgOutputFormat } from './job-dwg-output-format';
import { JobIfcOutputFormat } from './job-ifc-output-format';
import { JobIgesOutputFormat } from './job-iges-output-format';
import { JobObjOutputFormat } from './job-obj-output-format';
import { JobStepOutputFormat } from './job-step-output-format';
import { JobStlOutputFormat } from './job-stl-output-format';
import { JobSvf2OutputFormat } from './job-svf2-output-format';
import { JobSvfOutputFormat } from './job-svf-output-format';
import { JobThumbnailOutputFormat } from './job-thumbnail-output-format';


/**
 * @type JobPayloadFormat
 * Output description object, depends of the type
 * @export
 */
export type JobPayloadFormat = JobDwgOutputFormat | JobIfcOutputFormat | JobIgesOutputFormat | JobObjOutputFormat | JobStepOutputFormat | JobStlOutputFormat | JobSvf2OutputFormat | JobSvfOutputFormat | JobThumbnailOutputFormat;


