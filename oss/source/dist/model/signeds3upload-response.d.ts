/**
 *
 * @export
 * @interface Signeds3uploadResponse
 */
export interface Signeds3uploadResponse {
    /**
     * An array of signed URLs. For a single-part upload, this will only include a single URL. For a multipart upload, there will be one for each chunk of a multipart upload; the index of the URL in the array corresponds to the part number of the chunk.
     * @type {Array<string>}
     * @memberof Signeds3uploadResponse
     */
    'urls': Array<string>;
    /**
     * The identifier of the upload session, to differentiate multiple attempts to upload data for the the same object. This must be provided when re-requesting chunk URLs for the same blob if they expire, and when calling the Complete Upload endpoint.
     * @type {string}
     * @memberof Signeds3uploadResponse
     */
    'uploadKey': string;
}
