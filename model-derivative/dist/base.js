"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelDerivativeApiError = exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = void 0;
const axios_1 = require("axios");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
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
class BaseAPI {
    constructor(sdkManager, axios = axios_1.default) {
        this.axios = axios;
        if (sdkManager) {
            this.sdkManager = sdkManager;
        }
    }
}
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;
class ModelDerivativeApiError extends Error {
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
exports.ModelDerivativeApiError = ModelDerivativeApiError;
