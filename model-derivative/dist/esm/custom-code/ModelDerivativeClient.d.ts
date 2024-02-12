/// <reference types="node" />
import { ApsServiceRequestConfig, SDKManager } from "autodesk-sdkmanager";
import { DerivativesApi, GetThumbnailHeightEnum, GetThumbnailWidthEnum, InformationalApi, JobsApi, ManifestApi, MetadataApi, ThumbnailsApi } from "../api";
import { AllProperties, DeleteManifest, DerivativeDownload, DerivativeHead, Formats, Job, JobPayload, Manifest, ModelViews, ObjectTree, ReferencesPayload, Region, SpecificProperties, SpecificPropertiesPayload, SpecifyReferences, XAdsDerivativeFormat } from "../model";
import { Stream } from "stream";
export declare class ModelDerivativeClient {
    derivativesApi: DerivativesApi;
    informationalApi: InformationalApi;
    jobsApi: JobsApi;
    manifestApi: ManifestApi;
    metadataApi: MetadataApi;
    thumbnailsApi: ThumbnailsApi;
    constructor(sdkManager: SDKManager);
    getFormatsAsync(accessToken: string, ifModifiedSince?: string, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<Formats>;
    specifyReferencesAsync(accessToken: string, urn: string, specifyReferencesRequest?: ReferencesPayload, options?: ApsServiceRequestConfig): Promise<SpecifyReferences>;
    startJobAsync(accessToken: string, jobPayload: JobPayload, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, options?: ApsServiceRequestConfig): Promise<Job>;
    getManifestAsync(accessToken: string, urn: string, region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<Manifest>;
    deleteManifestAsync(accessToken: string, urn: string, region?: Region, options?: ApsServiceRequestConfig): Promise<DeleteManifest>;
    getDerivativeUrlAsync(accessToken: string, derivativeUrn: string, urn: string, region?: Region, minutesExpiration?: number, responseContentDisposition?: string, options?: ApsServiceRequestConfig): Promise<DerivativeDownload>;
    headCheckDerivativeAsync(accessToken: string, urn: string, derivativeUrn: string, region?: Region, options?: ApsServiceRequestConfig): Promise<DerivativeHead>;
    getThumbnailAsync(accessToken: string, urn: string, width?: GetThumbnailWidthEnum, height?: GetThumbnailHeightEnum, region?: Region, options?: ApsServiceRequestConfig): Promise<Stream>;
    getObjectTreeAsync(accessToken: string, urn: string, modelGuid: string, region?: Region, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, forceget?: string, objectid?: number, level?: string, options?: ApsServiceRequestConfig): Promise<ObjectTree>;
    getModelViewsAsync(accessToken: string, urn: string, region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<ModelViews>;
    getAllPropertiesAsync(accessToken: string, urn: string, modelGuid: string, region?: Region, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, objectid?: number, forceget?: string, options?: ApsServiceRequestConfig): Promise<AllProperties>;
    getSpecificPropertiesAsync(accessToken: string, urn: string, modelGuid: string, specificPropertiesPayload?: SpecificPropertiesPayload, region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<SpecificProperties>;
}
