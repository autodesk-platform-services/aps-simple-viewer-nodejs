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
import { assertParamExists, setBearerAuthToObject, setSearchParams, toPathString, createRequestFunction } from '../common';
import { BaseAPI, ModelDerivativeApiError } from '../base';
import { Region } from '../model';
import { Utils } from '../custom-code';
/**
 * ThumbnailsApi - axios parameter creator
 * @export
 */
export const ThumbnailsApiAxiosParamCreator = function (apsConfiguration) {
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
            assertParamExists('getThumbnail', 'urn', urn);
            const regionPath = Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : Region.US);
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
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (width !== undefined) {
                localVarQueryParameter['width'] = width;
            }
            if (height !== undefined) {
                localVarQueryParameter['height'] = height;
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
 * ThumbnailsApi - functional programming interface
 * @export
 */
export const ThumbnailsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = ThumbnailsApiAxiosParamCreator(sdkManager.apsconfiguration);
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
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
/**
 * ThumbnailsApi - object-oriented interface
 * @export
 * @class ThumbnailsApi
 * @extends {BaseAPI}
 */
export class ThumbnailsApi extends BaseAPI {
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
                const request = yield ThumbnailsApiFp(this.sdkManager).getThumbnail(accessToken, urn, width, height, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getThumbnail Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getThumbnail Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new ModelDerivativeApiError(`getThumbnail Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getThumbnail Request failed with no response received: ${error.request}`);
                    throw new ModelDerivativeApiError(`getThumbnail Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
/**
 * @export
 */
export const GetThumbnailWidthEnum = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
};
/**
 * @export
 */
export const GetThumbnailHeightEnum = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
};
