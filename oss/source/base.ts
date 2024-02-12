/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import globalAxios, {AxiosError} from 'axios';
import {ApsServiceRequestConfig, SDKManager} from "@aps_sdk/autodesk-sdkmanager";

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
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
export class BaseAPI {
    protected sdkManager: SDKManager | undefined;

    constructor(sdkManager?: SDKManager, protected axios: AxiosInstance = globalAxios) {
        if (sdkManager) {
            this.sdkManager = sdkManager;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}

export class OssApiError extends Error {
    /* istanbul ignore next */
    axiosError?: any;
    constructor(message: string, axiosError?: any) {
        super(message);
        if (axiosError) {
            this.axiosError = axiosError;
        }
        Object.setPrototypeOf(this, OssApiError.prototype);
    }
}
