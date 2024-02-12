/* tslint:disable */
/* eslint-disable */
/**
 * Specifies what version of the Revit translator/extractor to use. Possible values: next - Makes the translation job use the newest available version of the translator/extractor. This option is meant to be used by beta testers who wish to test a pre-release version of the translator. If no pre-release version is available, this option makes the translation job use the current official release version. previous - Makes the translation job use the previous official release version of the translator/extractor. This option is meant to be used as a workaround in case of regressions caused by a new official release of the translator/extractor.         If this attribute is not specified, the system uses the current official release version.
 * @export
 * @enum {string}
 */
export const ExtractorVersion = {
    Next: 'next',
    Previous: 'previous'
};
