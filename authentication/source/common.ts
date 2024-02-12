/* tslint:disable */
/* eslint-disable */

import type { RequestArgs } from "./base";
import type { AxiosInstance, AxiosResponse } from 'axios';
import { RequiredError } from "./base";
import {IApsConfiguration, SDKManager} from "@aps_sdk/autodesk-sdkmanager";

/**
 *
 * @throws {RequiredError}
 * @export
 */
export const assertParamExists = function (functionName: string, paramName: string, paramValue: unknown) {
    if (paramValue === null || paramValue === undefined) {
        throw new RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
}

/**
 *
 * @export
 */
export const setBearerAuthToObject = async function (object: any, accessToken?: string) {
      object["Authorization"] = "Bearer " + accessToken;
}

function setFlattenedQueryParams(urlSearchParams: URLSearchParams, parameter: any, key: string = ""): void {
    if (parameter == null) return;
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            (parameter as any[]).forEach(item => setFlattenedQueryParams(urlSearchParams, item, key));
        } 
        else {
            Object.keys(parameter).forEach(currentKey => 
                setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`)
            );
        }
    } 
    else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        } 
        else {
            urlSearchParams.set(key, parameter);
        }
    }
}

/**
 *
 * @export
 */
export const setSearchParams = function (url: URL, ...objects: any[]) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
}

/**
 *
 * @export
 */
export const serializeDataIfNeeded = function (value: any, requestOptions: any, apsConfiguration?: IApsConfiguration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && apsConfiguration && isJsonMime
        ? isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
}

/**
* Check if the given MIME is a JSON MIME.
* JSON MIME examples:
*   application/json
*   application/json; charset=UTF8
*   APPLICATION/JSON
*   application/vnd.company+json
* @param mime - MIME (Multipurpose Internet Mail Extensions)
* @return True if the given MIME is JSON, false otherwise.
*/
function isJsonMime(mime: string): boolean {
const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
}

/**
 *
 * @export
 */
export const toPathString = function (url: URL) {
    return url.pathname + url.search + url.hash
}

/**
 *
 * @export
 */
export const createRequestFunction = function (axiosArgs: RequestArgs, sdkManager?: SDKManager) {
    return <T = unknown, R = AxiosResponse<T>>() => {
        const config = {...axiosArgs.options, url: sdkManager.apsconfiguration?.baseAddress + axiosArgs.url};
        return sdkManager?.apsclient?.apsService.request(config);
    };
}


export const createRequestFunctionforUserInfo = function (axiosArgs: RequestArgs, sdkManager?: SDKManager) {
    return <T = unknown, R = AxiosResponse<T>>() => {
        const config = {...axiosArgs.options, url: axiosArgs.url};
        return sdkManager?.apsclient?.apsService.request(config);
    };
}
