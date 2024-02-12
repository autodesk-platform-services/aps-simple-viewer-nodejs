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
exports.GetThumbnailHeightEnum = exports.GetThumbnailWidthEnum = exports.ThumbnailsApi = exports.ThumbnailsApiFp = exports.ThumbnailsApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("@aps_sdk/autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
const model_1 = require("../model");
const custom_code_1 = require("../custom-code");
/**
 * ThumbnailsApi - axios parameter creator
 * @export
 */
const ThumbnailsApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Downloads a thumbnail of the specified source design.
         * @summary Fetch Thumbnail
         * @param {string} urn The Base64 (URL Safe) encoded design URN
         * @param {GetThumbnailWidthEnum} [width] Width of thumbnail.    Possible values: 100, 200, 400    If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available.
         * @param {GetThumbnailHeightEnum} [height] Height of thumbnails.  Possible values: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.  If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getThumbnail: (accessToken, urn, width, height, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'urn' is not null or undefined
            (0, common_1.assertParamExists)('getThumbnail', 'urn', urn);
            const regionPath = custom_code_1.Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : model_1.Region.US);
            const localVarPath = (regionPath + `{urn}/thumbnail`)
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
            if (width !== undefined) {
                localVarQueryParameter['width'] = width;
            }
            if (height !== undefined) {
                localVarQueryParameter['height'] = height;
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
exports.ThumbnailsApiAxiosParamCreator = ThumbnailsApiAxiosParamCreator;
/**
 * ThumbnailsApi - functional programming interface
 * @export
 */
const ThumbnailsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.ThumbnailsApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Downloads a thumbnail of the specified source design.
         * @summary Fetch Thumbnail
         * @param {string} urn The Base64 (URL Safe) encoded design URN
         * @param {GetThumbnailWidthEnum} [width] Width of thumbnail.    Possible values: 100, 200, 400    If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available.
         * @param {GetThumbnailHeightEnum} [height] Height of thumbnails.  Possible values: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.  If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getThumbnail(accessToken, urn, width, height, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getThumbnail(accessToken, urn, width, height, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.ThumbnailsApiFp = ThumbnailsApiFp;
/**
 * ThumbnailsApi - object-oriented interface
 * @export
 * @class ThumbnailsApi
 * @extends {BaseAPI}
 */
class ThumbnailsApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Downloads a thumbnail of the specified source design.
     * @summary Fetch Thumbnail
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param {GetThumbnailWidthEnum} [width] Width of thumbnail.    Possible values: 100, 200, 400    If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available.
     * @param {GetThumbnailHeightEnum} [height] Height of thumbnails.  Possible values: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.  If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThumbnailsApi
     */
    getThumbnail(accessToken, urn, width, height, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getThumbnail ");
            try {
                const request = yield (0, exports.ThumbnailsApiFp)(this.sdkManager).getThumbnail(accessToken, urn, width, height, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getThumbnail Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getThumbnail Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiError(`getThumbnail Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getThumbnail Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiError(`getThumbnail Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.ThumbnailsApi = ThumbnailsApi;
/**
 * @export
 */
exports.GetThumbnailWidthEnum = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
};
/**
 * @export
 */
exports.GetThumbnailHeightEnum = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
};
