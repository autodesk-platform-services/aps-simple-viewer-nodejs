/* tslint:disable */
/* eslint-disable */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiResponse } from "autodesk-sdkmanager";
import { setBearerAuthToObject, setSearchParams, toPathString, createRequestFunction } from '../common';
import { BaseAPI, ModelDerivativeApiError } from '../base';
/**
 * InformationalApi - axios parameter creator
 * @export
 */
export const InformationalApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Returns an up-to-date list of supported translations. It lets you determine the types of derivatives supported for each source design file type. Furthermore, you can get it to retrieve only the translations that have been updated since a date you specify.  See the `Supported Translation Formats table </en/docs/model-derivative/v2/overview/supported-translations>`_ for more details.  **Note:** We keep adding new file formats to our supported translations list, constantly.
         * @summary List Supported Formats
         * @param {string} [ifModifiedSince] Specifies a date in the &#x60;&#x60;Day of the week, DD Month YYYY HH:MM:SS GMT&#x60;&#x60; format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status &#x60;&#x60;304&#x60;&#x60;, NOT MODIFIED.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFormats: (accessToken, ifModifiedSince, acceptEncoding, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/modelderivative/v2/designdata/formats`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = String(ifModifiedSince);
            }
            if (acceptEncoding != null) {
                localVarHeaderParameter['Accept-Encoding'] = String(acceptEncoding);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * InformationalApi - functional programming interface
 * @export
 */
export const InformationalApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = InformationalApiAxiosParamCreator(sdkManager.apsconfiguration);
    return {
        /**
         * Returns an up-to-date list of supported translations. It lets you determine the types of derivatives supported for each source design file type. Furthermore, you can get it to retrieve only the translations that have been updated since a date you specify.  See the `Supported Translation Formats table </en/docs/model-derivative/v2/overview/supported-translations>`_ for more details.  **Note:** We keep adding new file formats to our supported translations list, constantly.
         * @summary List Supported Formats
         * @param {string} [ifModifiedSince] Specifies a date in the &#x60;&#x60;Day of the week, DD Month YYYY HH:MM:SS GMT&#x60;&#x60; format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status &#x60;&#x60;304&#x60;&#x60;, NOT MODIFIED.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFormats(accessToken, ifModifiedSince, acceptEncoding, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getFormats(accessToken, ifModifiedSince, acceptEncoding, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
/**
 * InformationalApi - object-oriented interface
 * @export
 * @class InformationalApi
 * @extends {BaseAPI}
 */
export class InformationalApi extends BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
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
    getFormats(accessToken, ifModifiedSince, acceptEncoding, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getFormats ");
            try {
                const request = yield InformationalApiFp(this.sdkManager).getFormats(accessToken, ifModifiedSince, acceptEncoding, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getFormats Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getFormats Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new ModelDerivativeApiError(`getFormats Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getFormats Request failed with no response received: ${error.request}`);
                    throw new ModelDerivativeApiError(`getFormats Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
