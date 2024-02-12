"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationalApi = exports.InformationalApiFp = exports.InformationalApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("@aps_sdk/autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
/**
 * InformationalApi - axios parameter creator
 * @export
 */
const InformationalApiAxiosParamCreator = function (apsConfiguration) {
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
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = String(ifModifiedSince);
            }
            if (acceptEncoding != null) {
                localVarHeaderParameter['Accept-Encoding'] = String(acceptEncoding);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.InformationalApiAxiosParamCreator = InformationalApiAxiosParamCreator;
/**
 * InformationalApi - functional programming interface
 * @export
 */
const InformationalApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.InformationalApiAxiosParamCreator)(sdkManager.apsconfiguration);
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
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.InformationalApiFp = InformationalApiFp;
/**
 * InformationalApi - object-oriented interface
 * @export
 * @class InformationalApi
 * @extends {BaseAPI}
 */
class InformationalApi extends base_1.BaseAPI {
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
                const request = yield (0, exports.InformationalApiFp)(this.sdkManager).getFormats(accessToken, ifModifiedSince, acceptEncoding, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getFormats Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getFormats Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiError(`getFormats Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getFormats Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiError(`getFormats Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.InformationalApi = InformationalApi;
