/* tslint:disable */
/* eslint-disable */


/**
 * Object Signed Object json response
 * @export
 * @interface CreateObjectSigned
 */
export interface CreateObjectSigned {
    /**
     * URL created for downloading the object
     * @type {string}
     * @memberof CreateObjectSigned
     */
    'signedUrl': string;
    /**
     * Value for expiration in minutes
     * @type {number}
     * @memberof CreateObjectSigned
     */
    'expiration': number;
    /**
     * IP addresses that can make a request to this URL.
     * @type {Array<string>}
     * @memberof CreateObjectSigned
     */
    'allowedIpAddresses'?: Array<string>;
}

