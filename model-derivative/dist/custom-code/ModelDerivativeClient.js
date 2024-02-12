"use strict";
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
exports.ModelDerivativeClient = void 0;
const api_1 = require("../api");
const model_1 = require("../model");
class ModelDerivativeClient {
    constructor(sdkManager) {
        this.derivativesApi = new api_1.DerivativesApi(sdkManager);
        this.informationalApi = new api_1.InformationalApi(sdkManager);
        this.jobsApi = new api_1.JobsApi(sdkManager);
        this.manifestApi = new api_1.ManifestApi(sdkManager);
        this.metadataApi = new api_1.MetadataApi(sdkManager);
        this.thumbnailsApi = new api_1.ThumbnailsApi(sdkManager);
    }
    //#region InformationalAPi
    getFormatsAsync(accessToken, ifModifiedSince, acceptEncoding, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.informationalApi.getFormats(accessToken, ifModifiedSince, acceptEncoding, options);
            return response.content;
        });
    }
    //#endregion InformationalApi
    //#region JobsApi
    specifyReferencesAsync(accessToken, urn, specifyReferencesRequest, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.jobsApi.specifyReferences(accessToken, urn, specifyReferencesRequest, options);
            return response.content;
        });
    }
    startJobAsync(accessToken, jobPayload, xAdsForce, xAdsDerivativeFormat, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.jobsApi.startJob(accessToken, xAdsForce, xAdsDerivativeFormat, jobPayload, options);
            return response.content;
        });
    }
    //#endregion JobsApi
    //#region ManifestApi
    getManifestAsync(accessToken, urn, region, acceptEncoding, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.manifestApi.getManifest(accessToken, urn, region, acceptEncoding, options);
            return response.content;
        });
    }
    deleteManifestAsync(accessToken, urn, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.manifestApi.deleteManifest(accessToken, urn, region, options);
            return response.content;
        });
    }
    //#endregion ManifestApi
    //#region DerivativesApi
    getDerivativeUrlAsync(accessToken, derivativeUrn, urn, region, minutesExpiration, responseContentDisposition, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.derivativesApi.getDerivativeUrl(accessToken, derivativeUrn, urn, region, minutesExpiration, responseContentDisposition, options);
            return response.content;
        });
    }
    headCheckDerivativeAsync(accessToken, urn, derivativeUrn, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.derivativesApi.headCheckDerivative(accessToken, urn, derivativeUrn, region, options);
            if (response.response.status == 202) {
                return (new model_1.DerivativeHead(true));
            }
            else {
                response.content.isProcessing = false;
                return response.content;
            }
        });
    }
    //#endregion DerivativesApi
    //#region thumbnailsApi
    getThumbnailAsync(accessToken, urn, width, height, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.thumbnailsApi.getThumbnail(accessToken, urn, width, height, region, options);
            return response.content;
        });
    }
    //#endregion thumbnailsApi
    //#region metadataApi
    getObjectTreeAsync(accessToken, urn, modelGuid, region, acceptEncoding, xAdsForce, xAdsDerivativeFormat, forceget, objectid, level, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.metadataApi.getObjectTree(accessToken, urn, modelGuid, region, acceptEncoding, xAdsForce, xAdsDerivativeFormat, forceget, objectid, level, options);
            if (response.response.status == 202) {
                return (new model_1.ObjectTree(true));
            }
            else {
                response.content.isProcessing = false;
                return response.content;
            }
        });
    }
    getModelViewsAsync(accessToken, urn, region, acceptEncoding, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.metadataApi.getModelViews(accessToken, urn, region, acceptEncoding, options);
            return response.content;
        });
    }
    getAllPropertiesAsync(accessToken, urn, modelGuid, region, acceptEncoding, xAdsForce, xAdsDerivativeFormat, objectid, forceget, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.metadataApi.getAllProperties(accessToken, urn, modelGuid, region, acceptEncoding, xAdsForce, xAdsDerivativeFormat, objectid, forceget, options);
            if (response.response.status == 202) {
                return (new model_1.AllProperties(true));
            }
            else {
                response.content.isProcessing = false;
                return response.content;
            }
        });
    }
    getSpecificPropertiesAsync(accessToken, urn, modelGuid, specificPropertiesPayload, region, acceptEncoding, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.metadataApi.fetchSpecificProperties(accessToken, urn, modelGuid, region, acceptEncoding, specificPropertiesPayload, options);
            if (response.response.status == 202) {
                return (new model_1.SpecificProperties(true));
            }
            else {
                response.content.isProcessing = false;
                return response.content;
            }
        });
    }
}
exports.ModelDerivativeClient = ModelDerivativeClient;
