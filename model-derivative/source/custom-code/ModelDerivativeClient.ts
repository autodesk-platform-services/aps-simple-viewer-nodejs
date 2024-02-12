import { ApsServiceRequestConfig, SDKManager } from  "@aps_sdk/autodesk-sdkmanager";
import { DerivativesApi, GetThumbnailHeightEnum, GetThumbnailWidthEnum, InformationalApi, JobsApi, ManifestApi, MetadataApi, ThumbnailsApi } from "../api";
import { AllProperties, DeleteManifest, DerivativeDownload, DerivativeHead, Formats, Job, JobPayload, Manifest, ModelViews, ObjectTree, ReferencesPayload, Region, SpecificProperties, SpecificPropertiesPayload, SpecifyReferences, XAdsDerivativeFormat } from "../model";
import { Stream } from "stream";


export class ModelDerivativeClient {
    public derivativesApi: DerivativesApi;
    public informationalApi: InformationalApi;
    public jobsApi: JobsApi;
    public manifestApi: ManifestApi;
    public metadataApi: MetadataApi;
    public thumbnailsApi: ThumbnailsApi;

    constructor(sdkManager: SDKManager) {
        this.derivativesApi = new DerivativesApi(sdkManager);
        this.informationalApi = new InformationalApi(sdkManager);
        this.jobsApi = new JobsApi(sdkManager);
        this.manifestApi = new ManifestApi(sdkManager);
        this.metadataApi = new MetadataApi(sdkManager);
        this.thumbnailsApi = new ThumbnailsApi(sdkManager);

    }


    //#region InformationalAPi

    public async getFormatsAsync(accessToken: string, ifModifiedSince?: string, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<Formats> {
        const response = await this.informationalApi.getFormats(accessToken, ifModifiedSince, acceptEncoding, options);
        return response.content;
    }

    //#endregion InformationalApi


    //#region JobsApi
    public async specifyReferencesAsync(accessToken: string, urn: string, specifyReferencesRequest?: ReferencesPayload, options?: ApsServiceRequestConfig): Promise<SpecifyReferences> {
        const response = await this.jobsApi.specifyReferences(accessToken, urn, specifyReferencesRequest, options);
        return response.content;
    }

    public async startJobAsync(accessToken: string, jobPayload: JobPayload,xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat,  options?: ApsServiceRequestConfig): Promise<Job> {
        const response = await this.jobsApi.startJob(accessToken, xAdsForce, xAdsDerivativeFormat, jobPayload, options);
        return response.content;

    }
    //#endregion JobsApi

    //#region ManifestApi
    public async getManifestAsync(accessToken: string, urn: string, region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<Manifest> {
        const response = await this.manifestApi.getManifest(accessToken, urn, region, acceptEncoding, options);
        return response.content;

    }

    public async deleteManifestAsync(accessToken: string, urn: string, region?: Region, options?: ApsServiceRequestConfig): Promise<DeleteManifest> {
        const response = await this.manifestApi.deleteManifest(accessToken, urn, region, options);
        return response.content;

    }
    //#endregion ManifestApi


    //#region DerivativesApi
    public async getDerivativeUrlAsync(accessToken: string, derivativeUrn: string, urn: string, region?: Region, minutesExpiration?: number, responseContentDisposition?: string, options?: ApsServiceRequestConfig): Promise<DerivativeDownload> {
        const response = await this.derivativesApi.getDerivativeUrl(accessToken, derivativeUrn, urn, region, minutesExpiration, responseContentDisposition, options);
        return response.content;
    }


    public async headCheckDerivativeAsync(accessToken: string, urn: string, derivativeUrn: string, region?: Region, options?: ApsServiceRequestConfig): Promise<DerivativeHead> {
        const response = await this.derivativesApi.headCheckDerivative(accessToken, urn, derivativeUrn, region, options);
        if (response.response.status == 202) {
            return (new DerivativeHead(true));
        }
        else{
            (<DerivativeHead>response.content).isProcessing = false;  
        return response.content;
        }
    }
    //#endregion DerivativesApi


    //#region thumbnailsApi
    public async getThumbnailAsync(accessToken: string, urn: string, width?: GetThumbnailWidthEnum, height?: GetThumbnailHeightEnum, region?: Region, options?: ApsServiceRequestConfig): Promise<Stream> {
        const response = await this.thumbnailsApi.getThumbnail(accessToken, urn, width, height, region, options);
        return response.content;
    }
    //#endregion thumbnailsApi

    //#region metadataApi

    public async getObjectTreeAsync(accessToken: string, urn: string, modelGuid: string, region?: Region, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, forceget?: string, objectid?: number, level?: string, options?: ApsServiceRequestConfig): Promise<ObjectTree> {
        const response = await this.metadataApi.getObjectTree(accessToken, urn, modelGuid, region, acceptEncoding, xAdsForce, xAdsDerivativeFormat, forceget, objectid, level, options);
        if (response.response.status == 202) {
            return (new ObjectTree(true));
        }
        else{
         (<ObjectTree>response.content).isProcessing = false;   
        return response.content;
        }
    }

    public async getModelViewsAsync(accessToken: string, urn: string, region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<ModelViews> {
        const response = await this.metadataApi.getModelViews(accessToken, urn, region, acceptEncoding, options);
        return response.content;
    }

    public async getAllPropertiesAsync(accessToken: string, urn: string, modelGuid: string, region?: Region, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, objectid?: number, forceget?: string, options?: ApsServiceRequestConfig): Promise<AllProperties> {
        const response = await this.metadataApi.getAllProperties(accessToken, urn, modelGuid, region, acceptEncoding, xAdsForce, xAdsDerivativeFormat, objectid, forceget, options);
        if (response.response.status == 202) {
            return (new AllProperties(true));
        }
        else{
            (<AllProperties>response.content).isProcessing = false;   
           return response.content;
        }
    }

    public async getSpecificPropertiesAsync(accessToken: string, urn: string, modelGuid: string, specificPropertiesPayload?: SpecificPropertiesPayload, region?: Region, acceptEncoding?: string,  options?: ApsServiceRequestConfig): Promise<SpecificProperties> {
        const response = await this.metadataApi.fetchSpecificProperties(accessToken, urn, modelGuid, region, acceptEncoding, specificPropertiesPayload, options);
        if (response.response.status == 202) {
            return (new SpecificProperties(true));
        }
        else{
            (<SpecificProperties>response.content).isProcessing = false;  
        return response.content;
        }
    }

    //#endregion metadataApi


}
