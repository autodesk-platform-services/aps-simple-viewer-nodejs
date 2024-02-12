import { JobSvf2OutputFormatAdvancedDGN } from "./job-svf2-output-format-advanced-DGN";
import { JobSvf2OutputFormatAdvancedDWG } from "./job-svf2-output-format-advanced-DWG";
import { JobSvf2OutputFormatAdvancedIFC } from "./job-svf2-output-format-advanced-IFC";
import { JobSvf2OutputFormatAdvancedNWD } from "./job-svf2-output-format-advanced-NWD";
import { JobSvf2OutputFormatAdvancedRVT } from "./job-svf2-output-format-advanced-RVT";
import { JobSvf2OutputFormatAdvancedVUE } from "./job-svf2-output-format-advanced-VUE";
/**
 * @type JobSvfOutputFormatAdvanced
 * Output description object, depends of the type
 * @export
 */
export type JobSvf2OutputFormatAdvanced = JobSvf2OutputFormatAdvancedVUE & JobSvf2OutputFormatAdvancedRVT & JobSvf2OutputFormatAdvancedNWD & JobSvf2OutputFormatAdvancedIFC & JobSvf2OutputFormatAdvancedDWG & JobSvf2OutputFormatAdvancedDGN;
