/**
 * Returns an up-to-date list of supported translations, which you can use to identify which types of derivatives are supported for each source file type
 * @export
 * @interface Formats
 */
export interface Formats {
    /**
     * A dictionary object that contains a collection of key-value pairs, where each pair represents the target file format and the corresponding source file formats.
     * @type {{ [key: string]: object; }}     *
     * @memberof Formats
     *
     *
     */
    'formats'?: {
        [key: string]: object;
    };
}
