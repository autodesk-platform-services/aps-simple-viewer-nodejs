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
exports.DerivativesApi = exports.DerivativesApiFp = exports.DerivativesApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("@aps_sdk/autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
const model_1 = require("../model");
const custom_code_1 = require("../custom-code");
/**
 * DerivativesApi - axios parameter creator
 * @export
 */
const DerivativesApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the `derivativeUrn` URI parameter. The signed cookies have a lifetime of 6 hours. Although you cannot use range headers for this operation, you can use range headers for the returned download URL to download the derivative in chunks, in parallel.
         * @summary Fetch Derivative Download URL
         * @param {string} derivativeUrn The URL-encoded URN of the derivatives. The URN is retrieved from the GET {urn}/manifest endpoint.
         * @param {string} urn The Base64 (URL Safe) encoded design URN
         * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of 400.
         * @param {string} [responseContentDisposition] The value that must be returned with the download URL as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDerivativeUrl: (accessToken, derivativeUrn, urn, region, minutesExpiration, responseContentDisposition, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'derivativeUrn' is not null or undefined
            (0, common_1.assertParamExists)('getDerivativeUrl', 'derivativeUrn', derivativeUrn);
            // verify required parameter 'urn' is not null or undefined
            (0, common_1.assertParamExists)('getDerivativeUrl', 'urn', urn);
            const regionPath = custom_code_1.Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : model_1.Region.US);
            const localVarPath = (regionPath + `{urn}/manifest/{derivativeUrn}/signedcookies`)
                .replace(`{${"derivativeUrn"}}`, encodeURIComponent(String(derivativeUrn)))
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutes-expiration'] = minutesExpiration;
            }
            if (responseContentDisposition !== undefined) {
                localVarQueryParameter['response-content-disposition'] = responseContentDisposition;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Returns information about the specified derivative.  This operation returns a set of headers similar to that returned by `Download Derivative </en/docs/model-derivative/v2/reference/urn-manifest-derivativeurn-GET>`_.  You can use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the Range header parameter.
         * @summary Check Derivative Details
         * @param {string} urn The Base64 (URL Safe) encoded design URN
         * @param {string} derivativeUrn The URL-encoded URN of the derivatives. The URN is retrieved from the GET {urn}/manifest endpoint.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        headCheckDerivative: (accessToken, urn, derivativeUrn, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'urn' is not null or undefined
            (0, common_1.assertParamExists)('headCheckDerivative', 'urn', urn);
            // verify required parameter 'derivativeUrn' is not null or undefined
            (0, common_1.assertParamExists)('headCheckDerivative', 'derivativeUrn', derivativeUrn);
            const regionPath = custom_code_1.Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : model_1.Region.US);
            const localVarPath = (regionPath + `{urn}/manifest/{derivativeUrn}`)
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)))
                .replace(`{${"derivativeUrn"}}`, encodeURIComponent(String(derivativeUrn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'HEAD' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
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
exports.DerivativesApiAxiosParamCreator = DerivativesApiAxiosParamCreator;
/**
 * DerivativesApi - functional programming interface
 * @export
 */
const DerivativesApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.DerivativesApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the `derivativeUrn` URI parameter. The signed cookies have a lifetime of 6 hours. Although you cannot use range headers for this operation, you can use range headers for the returned download URL to download the derivative in chunks, in parallel.
         * @summary Fetch Derivative Download URL
         * @param {string} derivativeUrn The URL-encoded URN of the derivatives. The URN is retrieved from the GET {urn}/manifest endpoint.
         * @param {string} urn The Base64 (URL Safe) encoded design URN
         * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of 400.
         * @param {string} [responseContentDisposition] The value that must be returned with the download URL as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDerivativeUrl(accessToken, derivativeUrn, urn, region, minutesExpiration, responseContentDisposition, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getDerivativeUrl(accessToken, derivativeUrn, urn, region, minutesExpiration, responseContentDisposition, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns information about the specified derivative.  This operation returns a set of headers similar to that returned by `Download Derivative </en/docs/model-derivative/v2/reference/urn-manifest-derivativeurn-GET>`_.  You can use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the Range header parameter.
         * @summary Check Derivative Details
         * @param {string} urn The Base64 (URL Safe) encoded design URN
         * @param {string} derivativeUrn The URL-encoded URN of the derivatives. The URN is retrieved from the GET {urn}/manifest endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        headCheckDerivative(accessToken, urn, derivativeUrn, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.headCheckDerivative(accessToken, urn, derivativeUrn, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.DerivativesApiFp = DerivativesApiFp;
/**
 * DerivativesApi - object-oriented interface
 * @export
 * @class DerivativesApi
 * @extends {BaseAPI}
 */
class DerivativesApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the `derivativeUrn` URI parameter. The signed cookies have a lifetime of 6 hours. Although you cannot use range headers for this operation, you can use range headers for the returned download URL to download the derivative in chunks, in parallel.
     * @summary Fetch Derivative Download URL
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. The URN is retrieved from the GET {urn}/manifest endpoint.
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of 400.
     * @param {string} [responseContentDisposition] The value that must be returned with the download URL as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApi
     */
    getDerivativeUrl(accessToken, derivativeUrn, urn, region, minutesExpiration, responseContentDisposition, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getDerivativeUrl ");
            try {
                const request = yield (0, exports.DerivativesApiFp)(this.sdkManager).getDerivativeUrl(accessToken, derivativeUrn, urn, region, minutesExpiration, responseContentDisposition, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getDerivativeUrl Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getDerivativeUrl Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiError(`getDerivativeUrl Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getDerivativeUrl Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiError(`getDerivativeUrl Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns information about the specified derivative.  This operation returns a set of headers similar to that returned by `Download Derivative </en/docs/model-derivative/v2/reference/urn-manifest-derivativeurn-GET>`_.  You can use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the Range header parameter.
     * @summary Check Derivative Details
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. The URN is retrieved from the GET {urn}/manifest endpoint.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApi
     */
    headCheckDerivative(accessToken, urn, derivativeUrn, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into headCheckDerivative ");
            try {
                const request = yield (0, exports.DerivativesApiFp)(this.sdkManager).headCheckDerivative(accessToken, urn, derivativeUrn, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`headCheckDerivative Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`headCheckDerivative Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiError(`headCheckDerivative Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`headCheckDerivative Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiError(`headCheckDerivative Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.DerivativesApi = DerivativesApi;
