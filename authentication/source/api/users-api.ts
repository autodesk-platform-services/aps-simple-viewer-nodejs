/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, createRequestFunctionforUserInfo } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, AuthenticationApiError } from '../base';
import { UserInfo } from '../model';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
         * @summary GET User Info
         * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserinfo: async (/* accessToken: string, */ authorization?: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/userinfo`;
            const localVarUrlObj = new URL(localVarPath, "https://api.userprofile.autodesk.com");
             let baseOptions;
             if (apsConfiguration) {
                 baseOptions = apsConfiguration.baseOptions;
             }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            // const localVarQueryParameter = {} as any;

            //  await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }



            // setSearchParams(localVarUrlObj, localVarQueryParameter);
             let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions,  ...options.headers };
            //localVarRequestOptions.baseURL = "https://api.userprofile.autodesk.com";
            return {
                url: localVarUrlObj.toString(),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
         * @summary GET User Info
         * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserinfo(/* accessToken: string, */ authorization?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserinfo(/* accessToken, */ authorization, options);
            return createRequestFunctionforUserInfo(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * UsersApi - interface
 * @export
 * @interface UsersApi
 */
export interface UsersApiInterface {
    /**
     * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
     * @summary GET User Info
     * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    getUserinfo(/* accessToken:  string*/authorization?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI implements UsersApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
     * @summary GET User Info
     * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async getUserinfo(/* accessToken: string, */ authorization?: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into getUserinfo ");
        try {
            const request = await UsersApiFp(this.sdkManager).getUserinfo(/* accessToken, */ authorization, options);
            const response = await request(this.axios);
            this.logger.logInfo(`getUserinfo Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`getUserinfo Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`getUserinfo Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`getUserinfo Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`getUserinfo Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }
}

