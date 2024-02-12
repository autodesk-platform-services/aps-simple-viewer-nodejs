/**
 *
 * @export
 * @interface CreateSignedResource
 */
export interface CreateSignedResource {
    /**
     * Expiration time value. Default is 60 minutes.
     * @type {number}
     * @memberof CreateSignedResource
     */
    'minutesExpiration'?: number;
    /**
     * If it is true, the public URL can only be used once and will expire immediately after use. When downloading an object, URL will expire once the download is complete.
     * @type {boolean}
     * @memberof CreateSignedResource
     */
    'singleUse'?: boolean;
    /**
     * If set, the public URL will use that value as Content-Type when downloading
     * @type {string}
     * @memberof CreateSignedResource
     */
    'contentType'?: string;
    /**
     * If set, the public URL will use that value as Content-Disposition when downloading
     * @type {string}
     * @memberof CreateSignedResource
     */
    'contentDisposition'?: string;
    /**
     * If set, the public URL will be restricted to the specified IP addresses. downloads and uploads will be allowed or blocked based on the list of the IP addresses in the X-Forwarded-For header received from Apigee.
     * @type {string}
     * @memberof CreateSignedResource
     */
    'allowedIpAddresses'?: string;
}
