/* tslint:disable */
/* eslint-disable */
import globalAxios from 'axios';
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
 * @class BaseAPI
 */
export class BaseAPI {
    constructor(sdkManager, axios = globalAxios) {
        this.axios = axios;
        if (sdkManager) {
            this.sdkManager = sdkManager;
        }
    }
}
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
export class ModelDerivativeApiError extends Error {
    constructor(message, axiosError) {
        super(message);
        if (axiosError) {
            this.axiosError = axiosError;
        }
        Object.setPrototypeOf(this, ModelDerivativeApiError.prototype);
    }
    httpStatusCode() {
        var _a, _b;
        return (_b = (_a = this.axiosError) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.status;
    }
}
