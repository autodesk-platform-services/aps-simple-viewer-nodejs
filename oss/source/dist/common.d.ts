import type { RequestArgs } from "./base";
import type { AxiosResponse } from 'axios';
import { IApsConfiguration, SDKManager } from "@aps_sdk/autodesk-sdkmanager";
/**
 *
 * @throws {RequiredError}
 * @export
 */
export declare const assertParamExists: (functionName: string, paramName: string, paramValue: unknown) => void;
/**
 *
 * @export
 */
export declare const setBearerAuthToObject: (object: any, accessToken?: string) => Promise<void>;
/**
 *
 * @export
 */
export declare const setSearchParams: (url: URL, ...objects: any[]) => void;
/**
 *
 * @export
 */
export declare const serializeDataIfNeeded: (value: any, requestOptions: any, apsConfiguration?: IApsConfiguration) => any;
/**
 *
 * @export
 */
export declare const toPathString: (url: URL) => string;
/**
 *
 * @export
 */
export declare const createRequestFunction: (axiosArgs: RequestArgs, sdkManager?: SDKManager) => <T = unknown, R = AxiosResponse<T, any>>() => Promise<any>;
/**
 *
 * @export
 */
export declare const createRequestFunctionOss: (axiosArgs: RequestArgs, sdkManager?: SDKManager) => <T = unknown, R = AxiosResponse<T, any>>() => Promise<any>;
