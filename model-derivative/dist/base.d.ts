import type { AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, ISDKError, SDKManager } from "autodesk-sdkmanager";
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: ApsServiceRequestConfig;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected axios: AxiosInstance;
    protected sdkManager: SDKManager | undefined;
    constructor(sdkManager?: SDKManager, axios?: AxiosInstance);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    constructor(field: string, msg?: string);
}
export declare class ModelDerivativeApiError extends Error implements ISDKError {
    axiosError?: any;
    constructor(message: string, axiosError?: any);
    httpStatusCode(): number | null;
}
