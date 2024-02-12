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
exports.createRequestFunction = exports.toPathString = exports.serializeDataIfNeeded = exports.setSearchParams = exports.setBearerAuthToObject = exports.assertParamExists = void 0;
const base_1 = require("./base");
/**
 *
 * @throws {RequiredError}
 * @export
 */
const assertParamExists = function (functionName, paramName, paramValue) {
    if (paramValue === null || paramValue === undefined) {
        throw new base_1.RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
};
exports.assertParamExists = assertParamExists;
/**
 *
 * @export
 */
const setBearerAuthToObject = function (object, accessToken) {
    return __awaiter(this, void 0, void 0, function* () {
        object["Authorization"] = "Bearer " + accessToken;
    });
};
exports.setBearerAuthToObject = setBearerAuthToObject;
function setFlattenedQueryParams(urlSearchParams, parameter, key = "") {
    if (parameter == null)
        return;
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            parameter.forEach(item => setFlattenedQueryParams(urlSearchParams, item, key));
        }
        else {
            Object.keys(parameter).forEach(currentKey => setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
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
const setSearchParams = function (url, ...objects) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
};
exports.setSearchParams = setSearchParams;
/**
 *
 * @export
 */
const serializeDataIfNeeded = function (value, requestOptions, apsConfiguration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && apsConfiguration && isJsonMime
        ? isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
};
exports.serializeDataIfNeeded = serializeDataIfNeeded;
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
function isJsonMime(mime) {
    const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
}
/**
 *
 * @export
 */
const toPathString = function (url) {
    return url.pathname + url.search + url.hash;
};
exports.toPathString = toPathString;
/**
 *
 * @export
 */
const createRequestFunction = function (axiosArgs, sdkManager) {
    return () => {
        var _a, _b;
        const config = Object.assign(Object.assign({}, axiosArgs.options), { url: ((_a = sdkManager.apsconfiguration) === null || _a === void 0 ? void 0 : _a.baseAddress) + axiosArgs.url });
        return (_b = sdkManager === null || sdkManager === void 0 ? void 0 : sdkManager.apsclient) === null || _b === void 0 ? void 0 : _b.apsService.request(config);
    };
};
exports.createRequestFunction = createRequestFunction;
