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
exports.JobsApi = exports.JobsApiFp = exports.JobsApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("@aps_sdk/autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
const model_1 = require("../model");
const custom_code_1 = require("../custom-code");
/**
 * JobsApi - axios parameter creator
 * @export
 */
const JobsApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Specifies the location of the files referenced by the specified source design.  If a source design contains references to other files, you must set  ``checkReferences`` to ``true``, when you call `Submit Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_.  The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files.
         * @summary Specify References
         * @param {string} urn The Base64 (URL Safe) encoded design URN
         * @param {ReferencesPayload} [specifyReferencesRequest]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        specifyReferences: (accessToken, urn, specifyReferencesRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            // verify required parameter 'urn' is not null or undefined
            (0, common_1.assertParamExists)('specifyReferences', 'urn', urn);
            const regionPath = custom_code_1.Utils.GetPathfromRegion((_a = specifyReferencesRequest === null || specifyReferencesRequest === void 0 ? void 0 : specifyReferencesRequest.region) !== null && _a !== void 0 ? _a : model_1.Region.US);
            const localVarPath = (regionPath + '{urn}/references')
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(specifyReferencesRequest, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
         * @summary Submit Translation Job
         * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree.
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - latest - (Default) Return SVF2 Object IDs.  - fallback - Return SVF Object IDs.    **Note**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following operations for that derivative.     - &#x60;Submit Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)    - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_   - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_
         * @param {JobPayload} [jobPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startJob: (accessToken, xAdsForce, xAdsDerivativeFormat, jobPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            var _b, _c;
            const regionPath = custom_code_1.Utils.GetPathfromRegion((_c = (_b = jobPayload.output.destination) === null || _b === void 0 ? void 0 : _b.region) !== null && _c !== void 0 ? _c : model_1.Region.US);
            const localVarPath = regionPath + 'job';
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (xAdsForce != null) {
                localVarHeaderParameter['x-ads-force'] = typeof xAdsForce === 'string'
                    ? xAdsForce
                    : JSON.stringify(xAdsForce);
            }
            if (xAdsDerivativeFormat != null) {
                localVarHeaderParameter['x-ads-derivative-format'] = typeof xAdsDerivativeFormat === 'string'
                    ? xAdsDerivativeFormat
                    : JSON.stringify(xAdsDerivativeFormat);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(jobPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.JobsApiAxiosParamCreator = JobsApiAxiosParamCreator;
/**
 * JobsApi - functional programming interface
 * @export
 */
const JobsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.JobsApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Specifies the location of the files referenced by the specified source design.  If a source design contains references to other files, you must set  ``checkReferences`` to ``true``, when you call `Submit Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_.  The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files.
         * @summary Specify References
         * @param {string} urn The Base64 (URL Safe) encoded design URN
         * @param {ReferencesPayload} [specifyReferencesRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        specifyReferences(accessToken, urn, specifyReferencesRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.specifyReferences(accessToken, urn, specifyReferencesRequest, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
         * @summary Submit Translation Job
         * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree.
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - latest - (Default) Return SVF2 Object IDs.  - fallback - Return SVF Object IDs.    **Note**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following operations for that derivative.     - &#x60;Submit Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)    - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_   - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_
         * @param {JobPayload} [jobPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startJob(accessToken, xAdsForce, xAdsDerivativeFormat, jobPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.startJob(accessToken, xAdsForce, xAdsDerivativeFormat, jobPayload, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.JobsApiFp = JobsApiFp;
/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
class JobsApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Specifies the location of the files referenced by the specified source design.  If a source design contains references to other files, you must set  ``checkReferences`` to ``true``, when you call `Submit Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_.  The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files.
     * @summary Specify References
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param {ReferencesPayload} [specifyReferencesRequest]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    specifyReferences(accessToken, urn, specifyReferencesRequest, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into specifyReferences ");
            try {
                const request = yield (0, exports.JobsApiFp)(this.sdkManager).specifyReferences(accessToken, urn, specifyReferencesRequest, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`specifyReferences Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`specifyReferences Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiError(`specifyReferences Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`specifyReferences Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiError(`specifyReferences Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
     * @summary Submit Translation Job
     * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree.
     * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - latest - (Default) Return SVF2 Object IDs.  - fallback - Return SVF Object IDs.    **Note**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following operations for that derivative.     - &#x60;Submit Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)    - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_   - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_
     * @param {JobPayload} [jobPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    startJob(accessToken, xAdsForce, xAdsDerivativeFormat, jobPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into startJob ");
            try {
                const request = yield (0, exports.JobsApiFp)(this.sdkManager).startJob(accessToken, xAdsForce, xAdsDerivativeFormat, jobPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`startJob Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`startJob Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiError(`startJob Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`startJob Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiError(`startJob Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.JobsApi = JobsApi;
