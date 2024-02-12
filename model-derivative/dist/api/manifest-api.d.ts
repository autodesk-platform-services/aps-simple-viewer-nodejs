import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { DeleteManifest, Region } from '../model';
import { Manifest } from '../model';
/**
 * ManifestApi - axios parameter creator
 * @export
 */
export declare const ManifestApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.  **Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).
     * @summary Delete Manifest
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteManifest: (accessToken: string, urn: string, region?: Region, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Retrieves the manifest of the specified source design.  The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.  The first time you translate a source design, the Model Derivative service creates a manifest for that source design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates that manifest. It does not create a new manifest. Instead, it keeps track of all derivatives of that design.    When the Model Derivative service starts a translation job (as a result of a request you make using `Submit Translation Job </en/docs/model-derivative/v2/reference/http/jobs/job-POST/>`_), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own ``status`` attribute. The manifest also contains an overall ``status`` attribute. The overall ``status`` becomes ``complete`` when the ``status`` of all individual derivatives become complete.  Once the translation status of a derivative is ``complete`` you can download the URN.  **Note**: You cannot download 3D SVF2 derivatives.
     * @summary Fetch Manifest
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getManifest: (accessToken: string, urn: string, region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * ManifestApi - functional programming interface
 * @export
 */
export declare const ManifestApiFp: (sdkManager?: SDKManager) => {
    /**
     * Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.  **Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).
     * @summary Delete Manifest
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteManifest(accessToken: string, urn: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteManifest>>;
    /**
     * Retrieves the manifest of the specified source design.  The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.  The first time you translate a source design, the Model Derivative service creates a manifest for that source design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates that manifest. It does not create a new manifest. Instead, it keeps track of all derivatives of that design.    When the Model Derivative service starts a translation job (as a result of a request you make using `Submit Translation Job </en/docs/model-derivative/v2/reference/http/jobs/job-POST/>`_), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own ``status`` attribute. The manifest also contains an overall ``status`` attribute. The overall ``status`` becomes ``complete`` when the ``status`` of all individual derivatives become complete.  Once the translation status of a derivative is ``complete`` you can download the URN.  **Note**: You cannot download 3D SVF2 derivatives.
     * @summary Fetch Manifest
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getManifest(accessToken: string, urn: string, region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Manifest>>;
};
/**
 * ManifestApi - interface
 * @export
 * @interface ManifestApi
 */
export interface ManifestApiInterface {
    /**
     * Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.  **Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).
     * @summary Delete Manifest
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestApiInterface
     */
    deleteManifest(accessToken: string, urn: string, region?: Region, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves the manifest of the specified source design.  The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.  The first time you translate a source design, the Model Derivative service creates a manifest for that source design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates that manifest. It does not create a new manifest. Instead, it keeps track of all derivatives of that design.    When the Model Derivative service starts a translation job (as a result of a request you make using `Submit Translation Job </en/docs/model-derivative/v2/reference/http/jobs/job-POST/>`_), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own ``status`` attribute. The manifest also contains an overall ``status`` attribute. The overall ``status`` becomes ``complete`` when the ``status`` of all individual derivatives become complete.  Once the translation status of a derivative is ``complete`` you can download the URN.  **Note**: You cannot download 3D SVF2 derivatives.
     * @summary Fetch Manifest
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestApiInterface
     */
    getManifest(accessToken: string, urn: string, region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * ManifestApi - object-oriented interface
 * @export
 * @class ManifestApi
 * @extends {BaseAPI}
 */
export declare class ManifestApi extends BaseAPI implements ManifestApiInterface {
    private logger;
    /**
     * Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.  **Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).
     * @summary Delete Manifest
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestApi
     */
    deleteManifest(accessToken: string, urn: string, region?: Region, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves the manifest of the specified source design.  The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.  The first time you translate a source design, the Model Derivative service creates a manifest for that source design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates that manifest. It does not create a new manifest. Instead, it keeps track of all derivatives of that design.    When the Model Derivative service starts a translation job (as a result of a request you make using `Submit Translation Job </en/docs/model-derivative/v2/reference/http/jobs/job-POST/>`_), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own ``status`` attribute. The manifest also contains an overall ``status`` attribute. The overall ``status`` becomes ``complete`` when the ``status`` of all individual derivatives become complete.  Once the translation status of a derivative is ``complete`` you can download the URN.  **Note**: You cannot download 3D SVF2 derivatives.
     * @summary Fetch Manifest
     * @param {string} urn The Base64 (URL Safe) encoded design URN
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestApi
     */
    getManifest(accessToken: string, urn: string, region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
