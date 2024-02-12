import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { Formats } from '../model';
/**
 * InformationalApi - axios parameter creator
 * @export
 */
export declare const InformationalApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Returns an up-to-date list of supported translations. It lets you determine the types of derivatives supported for each source design file type. Furthermore, you can get it to retrieve only the translations that have been updated since a date you specify.  See the `Supported Translation Formats table </en/docs/model-derivative/v2/overview/supported-translations>`_ for more details.  **Note:** We keep adding new file formats to our supported translations list, constantly.
     * @summary List Supported Formats
     * @param {string} [ifModifiedSince] Specifies a date in the &#x60;&#x60;Day of the week, DD Month YYYY HH:MM:SS GMT&#x60;&#x60; format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status &#x60;&#x60;304&#x60;&#x60;, NOT MODIFIED.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFormats: (accessToken: string, ifModifiedSince?: string, acceptEncoding?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * InformationalApi - functional programming interface
 * @export
 */
export declare const InformationalApiFp: (sdkManager?: SDKManager) => {
    /**
     * Returns an up-to-date list of supported translations. It lets you determine the types of derivatives supported for each source design file type. Furthermore, you can get it to retrieve only the translations that have been updated since a date you specify.  See the `Supported Translation Formats table </en/docs/model-derivative/v2/overview/supported-translations>`_ for more details.  **Note:** We keep adding new file formats to our supported translations list, constantly.
     * @summary List Supported Formats
     * @param {string} [ifModifiedSince] Specifies a date in the &#x60;&#x60;Day of the week, DD Month YYYY HH:MM:SS GMT&#x60;&#x60; format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status &#x60;&#x60;304&#x60;&#x60;, NOT MODIFIED.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFormats(accessToken: string, ifModifiedSince?: string, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Formats>>;
};
/**
 * InformationalApi - interface
 * @export
 * @interface InformationalApi
 */
export interface InformationalApiInterface {
    /**
     * Returns an up-to-date list of supported translations. It lets you determine the types of derivatives supported for each source design file type. Furthermore, you can get it to retrieve only the translations that have been updated since a date you specify.  See the `Supported Translation Formats table </en/docs/model-derivative/v2/overview/supported-translations>`_ for more details.  **Note:** We keep adding new file formats to our supported translations list, constantly.
     * @summary List Supported Formats
     * @param {string} [ifModifiedSince] Specifies a date in the &#x60;&#x60;Day of the week, DD Month YYYY HH:MM:SS GMT&#x60;&#x60; format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status &#x60;&#x60;304&#x60;&#x60;, NOT MODIFIED.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InformationalApiInterface
     */
    getFormats(accessToken: string, ifModifiedSince?: string, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * InformationalApi - object-oriented interface
 * @export
 * @class InformationalApi
 * @extends {BaseAPI}
 */
export declare class InformationalApi extends BaseAPI implements InformationalApiInterface {
    private logger;
    /**
     * Returns an up-to-date list of supported translations. It lets you determine the types of derivatives supported for each source design file type. Furthermore, you can get it to retrieve only the translations that have been updated since a date you specify.  See the `Supported Translation Formats table </en/docs/model-derivative/v2/overview/supported-translations>`_ for more details.  **Note:** We keep adding new file formats to our supported translations list, constantly.
     * @summary List Supported Formats
     * @param {string} [ifModifiedSince] Specifies a date in the &#x60;&#x60;Day of the week, DD Month YYYY HH:MM:SS GMT&#x60;&#x60; format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status &#x60;&#x60;304&#x60;&#x60;, NOT MODIFIED.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InformationalApi
     */
    getFormats(accessToken: string, ifModifiedSince?: string, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
