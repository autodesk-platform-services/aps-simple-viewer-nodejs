/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, AuthenticationApiError } from '../base';
import { Jwks } from '../model';
import { GrantType } from '../model';
import { IntrospectToken } from '../model';
import { Error } from '../model';
import { OidcSpec } from '../model';
import { Scopes } from '../model';
/**
 * TokenApi - axios parameter creator
 * @export
 */
export const TokenApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * To obtain an authorization code grant or id_token grant.  We rate limit this endpoint. When rate limit reached, then Apigee will throw HTTP 429 Too Many Requests error. See Forge docs on the rate limit: [Forge rate limit](https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/rate-limiting/forge-rate-limits/)  Errors came from OKTA/PF directly.Please refer forge v2 api document for more details <Link>
         * @summary authorize
         * @param {string} clientId Client ID.
         * @param {string} responseType Must be &#x60;code&#x60; for authorization code grant, &#x60;id_token&#x60; for an OpenID Connect ID token.
         * @param {string} redirectUri URL-encoded callback URL.
         * @param {string} state The payload that authorization flow will pass back verbatim in state query parameter to the callback URL. It can contain alphanumeric, comma, period, underscore, and hyphen characters.
         * @param {string} [nonce] A string value used to associate a Client session with an ID Token, and to mitigate replay attacks. Required if &#x60;response_type&#x60; is &#x60;id_token&#x60; or &#x60;token&#x60;
         * @param {Scopes} [scope] URL-encoded, a space-delimited list of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/)
         * @param {string} [responseMode] The mode of response for the supplied &#x60;response_type&#x60;. Supported values are &#x60;fragment&#x60;, &#x60;form_post&#x60; or &#x60;query&#x60;. &#x60;query&#x60; is not supported if the &#x60;response_type&#x60; is &#x60;token&#x60;.
         * @param {string} [prompt] Values supported: &#x60;login&#x60; and &#x60;none&#x60;. &#x60;login&#x60;: Always prompt the user for authentication, regardless of the login session. &#x60;prompt&#x60;: Do not prompt user for authentication. If user is not logged in, the calling application receives an error.
         * @param {string} [authoptions] A Json object carries information to Identity.
         * @param {string} [codeChallenge] A challenge for PKCE. The challenge is verified in the access token request.
         * @param {string} [codeChallengeMethod] Method used to derive the code challenge for PKCE. Must be S256 if &#x60;code_challenge&#x60; is present.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize: (/* accessToken: string, */ clientId: string, responseType: string, redirectUri: string, state: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string, options: ApsServiceRequestConfig = {}): string => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('authorize', 'clientId', clientId)
            // verify required parameter 'responseType' is not null or undefined
            assertParamExists('authorize', 'responseType', responseType)
            // verify required parameter 'redirectUri' is not null or undefined
            assertParamExists('authorize', 'redirectUri', redirectUri)
            const localVarPath = `/authentication/v2/authorize`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarQueryParameter = {} as any;

            if (clientId !== undefined) {
                localVarQueryParameter['client_id'] = clientId;
            }

            if (responseType !== undefined) {
                localVarQueryParameter['response_type'] = responseType;
            }

            if (redirectUri !== undefined) {
                localVarQueryParameter['redirect_uri'] = redirectUri;
            }

            if (nonce !== undefined) {
                localVarQueryParameter['nonce'] = nonce;
            }

            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
            }

            if (scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }

            if (responseMode !== undefined) {
                localVarQueryParameter['response_mode'] = responseMode;
            }

            if (prompt !== undefined) {
                localVarQueryParameter['prompt'] = prompt;
            }

            if (authoptions !== undefined) {
                localVarQueryParameter['authoptions'] = authoptions;
            }

            if (codeChallenge !== undefined) {
                localVarQueryParameter['code_challenge'] = codeChallenge;
            }

            if (codeChallengeMethod !== undefined) {
                localVarQueryParameter['code_challenge_method'] = codeChallengeMethod;
            }

            setSearchParams(localVarUrlObj, localVarQueryParameter);
          
            return localVarUrlObj.toString();          
        },
        /**
         * Token endpoint returns access token and refresh token, depending on the request parameters.  The endpoint requires Basic Authorization for confidential clients. For public clients, the Authorization Header should not be in the header and `client_id` should be included in the form body.  * If `grant_type` is `authorization_code`, it returns 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, it returns 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, it returns new access token by using the refresh token provided in the request. 
         * @summary token
         * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
         * @param {Granttype} [grantType] 
         * @param {string} [code] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
         * @param {string} [redirectUri] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
         * @param {string} [codeVerifier] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60; and &#x60;code_challenge&#x60; was specified in /authorize request
         * @param {string} [refreshToken] Required if &#x60;grant_type&#x60; is &#x60;refresh_token&#x60;
         * @param {Scopes} [scope] 
         * @param {string} [clientId] This field is required for public client
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchtoken: async (/* accessToken: string, */ authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/v2/token`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


            if (grantType !== undefined) {
                localVarFormParams.set('grant_type', grantType as any);
            }

            if (code !== undefined) {
                localVarFormParams.set('code', code as any);
            }

            if (redirectUri !== undefined) {
                localVarFormParams.set('redirect_uri', redirectUri as any);
            }

            if (codeVerifier !== undefined) {
                localVarFormParams.set('code_verifier', codeVerifier as any);
            }

            if (refreshToken !== undefined) {
                localVarFormParams.set('refresh_token', refreshToken as any);
            }

            if (scope !== undefined) {
                localVarFormParams.set('scope', scope as any);
            }

            if (clientId !== undefined) {
                localVarFormParams.set('client_id', clientId as any);
            }


            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * To return JSON Web Key Set that used to validate JWT token.
         * @summary keys
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKeys: async (/* accessToken: string */ options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/v2/keys`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            //  await setBearerAuthToObject(localVarHeaderParameter, accessToken)



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Openid-configuration is a Well-known URI Discovery Mechanism for the Provider Configuration URI and is defined in OpenID Connect (OIDC). Openid-configuration is a URI defined within OpenID Connect which provides configuration information about the Identity Provider (IDP).  This endpoint retrieves the metadata as a JSON listing of OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
         * @summary GET OIDC Specification
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOidcSpec: async (/* accessToken: string,  */options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/.well-known/openid-configuration`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            //await setBearerAuthToObject(localVarHeaderParameter, accessToken)



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Examines an access token including the reference token and returns the status information of the tokens.  If the token is active, additional information is returned.  If the token is expired, invalid or revoked, it returns the response as status: inactive.
         * @summary introspect
         * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
         * @param {string} [token] 
         * @param {string} [clientId] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        introspectToken: async (/* accessToken: string, */ authorization?: string, token?: string, clientId?: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/v2/introspect`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            //  await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


            if (token !== undefined) {
                localVarFormParams.set('token', token as any);
            }

            if (clientId !== undefined) {
                localVarFormParams.set('client_id', clientId as any);
            }


            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.
         * @summary logout
         * @param {string} [postLogoutRedirectUri] Location to redirect once the logout is performed. Note that the provided domain host should be in the allowed list. Contact #oxygen slack channel for more details.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: (/* accessToken: string, */ postLogoutRedirectUri?: string, options: ApsServiceRequestConfig = {}): string => {
            const localVarPath = `/authentication/v2/logout`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarQueryParameter = {} as any;         

            if (postLogoutRedirectUri !== undefined) {
                localVarQueryParameter['post_logout_redirect_uri'] = postLogoutRedirectUri;
            }

            setSearchParams(localVarUrlObj, localVarQueryParameter);        
            return localVarUrlObj.toString();
        },
        /**
         * This API endpoint takes an access token or refresh token and revokes it. Once the token is revoked, it becomes inactive and returns no body response.  A client can only revoke its own tokens.
         * @summary revoke
         * @param {string} [token] The token to be revoked.
         * @param {string} [tokenTypeHint] Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
         * @param {string} [clientId] This field is required for public client.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revoke: async (/* accessToken: string,  */token?: string, authorization?: string, tokenTypeHint?: string, clientId?: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/v2/revoke`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


            if (token !== undefined) {
                localVarFormParams.set('token', token as any);
            }

            if (tokenTypeHint !== undefined) {
                localVarFormParams.set('token_type_hint', tokenTypeHint as any);
            }

            if (clientId !== undefined) {
                localVarFormParams.set('client_id', clientId as any);
            }


            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokenApi - functional programming interface
 * @export
 */
export const TokenApiFp = function (sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = TokenApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * To obtain an authorization code grant or id_token grant.  We rate limit this endpoint. When rate limit reached, then Apigee will throw HTTP 429 Too Many Requests error. See Forge docs on the rate limit: [Forge rate limit](https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/rate-limiting/forge-rate-limits/)  Errors came from OKTA/PF directly.Please refer forge v2 api document for more details <Link>
         * @summary authorize
         * @param {string} clientId Client ID.
         * @param {string} responseType Must be &#x60;code&#x60; for authorization code grant, &#x60;id_token&#x60; for an OpenID Connect ID token.
         * @param {string} redirectUri URL-encoded callback URL.
         * @param {string} state The payload that authorization flow will pass back verbatim in state query parameter to the callback URL. It can contain alphanumeric, comma, period, underscore, and hyphen characters.
         * @param {string} [nonce] A string value used to associate a Client session with an ID Token, and to mitigate replay attacks. Required if &#x60;response_type&#x60; is &#x60;id_token&#x60; or &#x60;token&#x60;
         * @param {Scopes} [scope] URL-encoded, a space-delimited list of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/)
         * @param {string} [responseMode] The mode of response for the supplied &#x60;response_type&#x60;. Supported values are &#x60;fragment&#x60;, &#x60;form_post&#x60; or &#x60;query&#x60;. &#x60;query&#x60; is not supported if the &#x60;response_type&#x60; is &#x60;token&#x60;.
         * @param {string} [prompt] Values supported: &#x60;login&#x60; and &#x60;none&#x60;. &#x60;login&#x60;: Always prompt the user for authentication, regardless of the login session. &#x60;prompt&#x60;: Do not prompt user for authentication. If user is not logged in, the calling application receives an error.
         * @param {string} [authoptions] A Json object carries information to Identity.
         * @param {string} [codeChallenge] A challenge for PKCE. The challenge is verified in the access token request.
         * @param {string} [codeChallengeMethod] Method used to derive the code challenge for PKCE. Must be S256 if &#x60;code_challenge&#x60; is present.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize(/* accessToken: string, */ clientId: string, responseType: string, redirectUri: string, state: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string, options?: ApsServiceRequestConfig): string {
            const url = localVarAxiosParamCreator.authorize(/* accessToken, */ clientId, responseType, redirectUri, state, nonce, scope, responseMode, prompt, authoptions, codeChallenge, codeChallengeMethod, options);
            return url;    
        },
        /**
         * Token endpoint returns access token and refresh token, depending on the request parameters.  The endpoint requires Basic Authorization for confidential clients. For public clients, the Authorization Header should not be in the header and `client_id` should be included in the form body.  * If `grant_type` is `authorization_code`, it returns 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, it returns 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, it returns new access token by using the refresh token provided in the request. 
         * @summary token
         * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
         * @param {Granttype} [grantType] 
         * @param {string} [code] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
         * @param {string} [redirectUri] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
         * @param {string} [codeVerifier] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60; and &#x60;code_challenge&#x60; was specified in /authorize request
         * @param {string} [refreshToken] Required if &#x60;grant_type&#x60; is &#x60;refresh_token&#x60;
         * @param {Scopes} [scope] 
         * @param {string} [clientId] This field is required for public client
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchtoken(/* accessToken: string, */ authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchtoken(/* accessToken, */ authorization, grantType, code, redirectUri, codeVerifier, refreshToken, scope, clientId, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * To return JSON Web Key Set that used to validate JWT token.
         * @summary keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getKeys(/* accessToken: string,  */options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Jwks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getKeys(/* accessToken, */ options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Openid-configuration is a Well-known URI Discovery Mechanism for the Provider Configuration URI and is defined in OpenID Connect (OIDC). Openid-configuration is a URI defined within OpenID Connect which provides configuration information about the Identity Provider (IDP).  This endpoint retrieves the metadata as a JSON listing of OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
         * @summary GET OIDC Specification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOidcSpec(/* accessToken: string, */ options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OidcSpec>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOidcSpec(/* accessToken, */ options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Examines an access token including the reference token and returns the status information of the tokens.  If the token is active, additional information is returned.  If the token is expired, invalid or revoked, it returns the response as status: inactive.
         * @summary introspect
         * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
         * @param {string} [token] 
         * @param {string} [clientId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async introspectToken(/* accessToken: string,  */authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IntrospectToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.introspectToken(/* accessToken, */ authorization, token, clientId, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.
         * @summary logout
         * @param {string} [postLogoutRedirectUri] Location to redirect once the logout is performed. Note that the provided domain host should be in the allowed list. Contact #oxygen slack channel for more details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(/* accessToken: string, */ postLogoutRedirectUri?: string, options?: ApsServiceRequestConfig): string {
            const url = localVarAxiosParamCreator.logout(/* accessToken, */ postLogoutRedirectUri, options);
            return url;
        },
        /**
         * This API endpoint takes an access token or refresh token and revokes it. Once the token is revoked, it becomes inactive and returns no body response.  A client can only revoke its own tokens.
         * @summary revoke
         * @param {string} [token] The token to be revoked.
         * @param {string} [tokenTypeHint] Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
         * @param {string} [clientId] This field is required for public client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revoke(/* accessToken: string, */ token?: string, authorization?: string, tokenTypeHint?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.revoke(/* accessToken, */ token, authorization, tokenTypeHint, clientId, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * TokenApi - interface
 * @export
 * @interface TokenApi
 */
export interface TokenApiInterface {
    /**
     * To obtain an authorization code grant or id_token grant.  We rate limit this endpoint. When rate limit reached, then Apigee will throw HTTP 429 Too Many Requests error. See Forge docs on the rate limit: [Forge rate limit](https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/rate-limiting/forge-rate-limits/)  Errors came from OKTA/PF directly.Please refer forge v2 api document for more details <Link>
     * @summary authorize
     * @param {string} clientId Client ID.
     * @param {string} responseType Must be &#x60;code&#x60; for authorization code grant, &#x60;id_token&#x60; for an OpenID Connect ID token.
     * @param {string} redirectUri URL-encoded callback URL.
     * @param {string} state The payload that authorization flow will pass back verbatim in state query parameter to the callback URL. It can contain alphanumeric, comma, period, underscore, and hyphen characters.
     * @param {string} [nonce] A string value used to associate a Client session with an ID Token, and to mitigate replay attacks. Required if &#x60;response_type&#x60; is &#x60;id_token&#x60; or &#x60;token&#x60;
     * @param {Scopes} [scope] URL-encoded, a space-delimited list of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/)
     * @param {string} [responseMode] The mode of response for the supplied &#x60;response_type&#x60;. Supported values are &#x60;fragment&#x60;, &#x60;form_post&#x60; or &#x60;query&#x60;. &#x60;query&#x60; is not supported if the &#x60;response_type&#x60; is &#x60;token&#x60;.
     * @param {string} [prompt] Values supported: &#x60;login&#x60; and &#x60;none&#x60;. &#x60;login&#x60;: Always prompt the user for authentication, regardless of the login session. &#x60;prompt&#x60;: Do not prompt user for authentication. If user is not logged in, the calling application receives an error.
     * @param {string} [authoptions] A Json object carries information to Identity.
     * @param {string} [codeChallenge] A challenge for PKCE. The challenge is verified in the access token request.
     * @param {string} [codeChallengeMethod] Method used to derive the code challenge for PKCE. Must be S256 if &#x60;code_challenge&#x60; is present.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    authorize(/* accessToken: string, */clientId: string, responseType: string, redirectUri: string, state: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string): string;

    /**
     * Token endpoint returns access token and refresh token, depending on the request parameters.  The endpoint requires Basic Authorization for confidential clients. For public clients, the Authorization Header should not be in the header and `client_id` should be included in the form body.  * If `grant_type` is `authorization_code`, it returns 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, it returns 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, it returns new access token by using the refresh token provided in the request. 
     * @summary token
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {Granttype} [grantType] 
     * @param {string} [code] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [redirectUri] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [codeVerifier] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60; and &#x60;code_challenge&#x60; was specified in /authorize request
     * @param {string} [refreshToken] Required if &#x60;grant_type&#x60; is &#x60;refresh_token&#x60;
     * @param {Scopes} [scope] 
     * @param {string} [clientId] This field is required for public client
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    fetchtoken(/* accessToken: string, */authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * To return JSON Web Key Set that used to validate JWT token.
     * @summary keys
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    getKeys(/* accessToken: string, */ options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Openid-configuration is a Well-known URI Discovery Mechanism for the Provider Configuration URI and is defined in OpenID Connect (OIDC). Openid-configuration is a URI defined within OpenID Connect which provides configuration information about the Identity Provider (IDP).  This endpoint retrieves the metadata as a JSON listing of OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
     * @summary GET OIDC Specification
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    getOidcSpec(/* accessToken: string,  */options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Examines an access token including the reference token and returns the status information of the tokens.  If the token is active, additional information is returned.  If the token is expired, invalid or revoked, it returns the response as status: inactive.
     * @summary introspect
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {string} [token] 
     * @param {string} [clientId] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    introspectToken(/* accessToken: string,  */authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.
     * @summary logout
     * @param {string} [postLogoutRedirectUri] Location to redirect once the logout is performed. Note that the provided domain host should be in the allowed list. Contact #oxygen slack channel for more details.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    logout(/* accessToken: string, */ postLogoutRedirectUri?: string, options?: ApsServiceRequestConfig): string;

    /**
     * This API endpoint takes an access token or refresh token and revokes it. Once the token is revoked, it becomes inactive and returns no body response.  A client can only revoke its own tokens.
     * @summary revoke
     * @param {string} [token] The token to be revoked.
     * @param {string} [tokenTypeHint] Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
     * @param {string} [clientId] This field is required for public client.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    revoke(/* accessToken: string, */ token?: string, authorization?: string, tokenTypeHint?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * TokenApi - object-oriented interface
 * @export
 * @class TokenApi
 * @extends {BaseAPI}
 */
export class TokenApi extends BaseAPI implements TokenApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * To obtain an authorization code grant or id_token grant.  We rate limit this endpoint. When rate limit reached, then Apigee will throw HTTP 429 Too Many Requests error. See Forge docs on the rate limit: [Forge rate limit](https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/rate-limiting/forge-rate-limits/)  Errors came from OKTA/PF directly.Please refer forge v2 api document for more details <Link>
     * @summary authorize
     * @param {string} clientId Client ID.
     * @param {string} responseType Must be &#x60;code&#x60; for authorization code grant, &#x60;id_token&#x60; for an OpenID Connect ID token.
     * @param {string} redirectUri URL-encoded callback URL.
     * @param {string} state The payload that authorization flow will pass back verbatim in state query parameter to the callback URL. It can contain alphanumeric, comma, period, underscore, and hyphen characters.
     * @param {string} [nonce] A string value used to associate a Client session with an ID Token, and to mitigate replay attacks. Required if &#x60;response_type&#x60; is &#x60;id_token&#x60; or &#x60;token&#x60;
     * @param {Scopes} [scope] URL-encoded, a space-delimited list of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/)
     * @param {string} [responseMode] The mode of response for the supplied &#x60;response_type&#x60;. Supported values are &#x60;fragment&#x60;, &#x60;form_post&#x60; or &#x60;query&#x60;. &#x60;query&#x60; is not supported if the &#x60;response_type&#x60; is &#x60;token&#x60;.
     * @param {string} [prompt] Values supported: &#x60;login&#x60; and &#x60;none&#x60;. &#x60;login&#x60;: Always prompt the user for authentication, regardless of the login session. &#x60;prompt&#x60;: Do not prompt user for authentication. If user is not logged in, the calling application receives an error.
     * @param {string} [authoptions] A Json object carries information to Identity.
     * @param {string} [codeChallenge] A challenge for PKCE. The challenge is verified in the access token request.
     * @param {string} [codeChallengeMethod] Method used to derive the code challenge for PKCE. Must be S256 if &#x60;code_challenge&#x60; is present.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public authorize(/* accessToken: string, */ clientId: string, responseType: string, redirectUri: string, state: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string) {
        this.logger.logInfo("Entered into authorize ");
        try {
            const url = TokenApiFp(this.sdkManager).authorize(/* accessToken, */ clientId, responseType, redirectUri, state, nonce, scope, responseMode, prompt, authoptions, codeChallenge, codeChallengeMethod);
            this.logger.logInfo('authorize Request completed successfully with status code');
            return url;
        } catch (error) {
            this.logger.logError(`authorize Request failed with error : ${error}`);
            throw new AuthenticationApiError(`authorize  failed with error : ${error}`);

        }
    }

    /**
     * Token endpoint returns access token and refresh token, depending on the request parameters.  The endpoint requires Basic Authorization for confidential clients. For public clients, the Authorization Header should not be in the header and `client_id` should be included in the form body.  * If `grant_type` is `authorization_code`, it returns 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, it returns 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, it returns new access token by using the refresh token provided in the request. 
     * @summary token
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {Granttype} [grantType] 
     * @param {string} [code] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [redirectUri] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [codeVerifier] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60; and &#x60;code_challenge&#x60; was specified in /authorize request
     * @param {string} [refreshToken] Required if &#x60;grant_type&#x60; is &#x60;refresh_token&#x60;
     * @param {Scopes} [scope] 
     * @param {string} [clientId] This field is required for public client
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async fetchtoken(/* accessToken: string, */ authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into fetchtoken ");
        try {
            const request = await TokenApiFp(this.sdkManager).fetchtoken(/* accessToken, */ authorization, grantType, code, redirectUri, codeVerifier, refreshToken, scope, clientId, options);
            const response = await request(this.axios);
            this.logger.logInfo(`fetchtoken Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`fetchtoken Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`fetchtoken Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`fetchtoken Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`fetchtoken Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * To return JSON Web Key Set that used to validate JWT token.
     * @summary keys
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async getKeys(/* accessToken: string, */ options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into getKeys ");
        try {
            const request = await TokenApiFp(this.sdkManager).getKeys(/* accessToken, */ options);
            const response = await request(this.axios);
            this.logger.logInfo(`getKeys Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`getKeys Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`getKeys Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`getKeys Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`getKeys Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * Openid-configuration is a Well-known URI Discovery Mechanism for the Provider Configuration URI and is defined in OpenID Connect (OIDC). Openid-configuration is a URI defined within OpenID Connect which provides configuration information about the Identity Provider (IDP).  This endpoint retrieves the metadata as a JSON listing of OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
     * @summary GET OIDC Specification
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async getOidcSpec(/* accessToken: string, */ options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into getOidcSpec ");
        try {
            const request = await TokenApiFp(this.sdkManager).getOidcSpec(/* accessToken, */ options);
            const response = await request(this.axios);
            this.logger.logInfo(`getOidcSpec Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`getOidcSpec Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`getOidcSpec Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`getOidcSpec Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`getOidcSpec Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * Examines an access token including the reference token and returns the status information of the tokens.  If the token is active, additional information is returned.  If the token is expired, invalid or revoked, it returns the response as status: inactive.
     * @summary introspect
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {string} [token] 
     * @param {string} [clientId] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async introspectToken(/* accessToken: string, */ authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into introspectToken ");
        try {
            const request = await TokenApiFp(this.sdkManager).introspectToken(/* accessToken, */ authorization, token, clientId, options);
            const response = await request(this.axios);
            this.logger.logInfo(`introspectToken Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`introspectToken Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`introspectToken Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`introspectToken Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`introspectToken Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.
     * @summary logout
     * @param {string} [postLogoutRedirectUri] Location to redirect once the logout is performed. Note that the provided domain host should be in the allowed list. Contact #oxygen slack channel for more details.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public logout(/* accessToken: string,  */postLogoutRedirectUri?: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into logout ");
        try {
            const url = TokenApiFp(this.sdkManager).logout(/* accessToken, */ postLogoutRedirectUri, options);
            this.logger.logInfo("logout Request completed successfully");
            return url;
        } catch (error) {
            this.logger.logError(`logout Request failed with error ${error}`);
            throw new AuthenticationApiError(`logout Request failed with error ${error}`);
        }
    }

    /**
     * This API endpoint takes an access token or refresh token and revokes it. Once the token is revoked, it becomes inactive and returns no body response.  A client can only revoke its own tokens.
     * @summary revoke
     * @param {string} [token] The token to be revoked.
     * @param {string} [tokenTypeHint] Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
     * @param {string} [clientId] This field is required for public client.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async revoke(/* accessToken: string, */ token?: string, authorization?: string, tokenTypeHint?: string, clientId?: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into revoke ");
        try {
            const request = await TokenApiFp(this.sdkManager).revoke(/* accessToken, */ token, authorization, tokenTypeHint, clientId, options);
            const response = await request(this.axios);
            this.logger.logInfo(`revoke Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`revoke Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`revoke Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`revoke Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`revoke Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }
}

