import { BlockUploadResponseMissingBlocks } from './block-upload-response-missing-blocks';
/**
 *
 * @export
 * @interface BlockUploadResponse
 */
export interface BlockUploadResponse {
    /**
     *
     * @type {string}
     * @memberof BlockUploadResponse
     */
    'uploadKey'?: string;
    /**
     *
     * @type {Array<BlockUploadResponseMissingBlocks>}
     * @memberof BlockUploadResponse
     */
    'missingBlocks'?: Array<BlockUploadResponseMissingBlocks>;
}
