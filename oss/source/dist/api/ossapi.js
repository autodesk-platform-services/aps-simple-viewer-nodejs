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
exports.UploadSignedResourcesChunkXAdsRegionEnum = exports.UploadSignedResourceXAdsRegionEnum = exports.HeadObjectDetailsWithEnum = exports.GetSignedResourceRegionEnum = exports.GetObjectDetailsWithEnum = exports.GetBucketsRegionEnum = exports.DeleteSignedResourceRegionEnum = exports.CreateSignedResourceAccessEnum = exports.CreateBucketXAdsRegionEnum = exports.OSSApi = exports.OSSApiFp = exports.OSSApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("@aps_sdk/autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
/**
 * OSSApi - axios parameter creator
 * @export
 */
const OSSApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        batchCompleteUpload: (accessToken, bucketKey, requests, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('batchCompleteUpload', 'bucketKey', bucketKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/batchcompleteupload`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(requests, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Gets one or more signed URLs to download objects. The signed URLs can be used to download the objects directly from S3, skipping OSS servers. Be aware that expiration time for the signed URL(s) is just 60 seconds. So, a request to the URL(s) must begin within 60 seconds; the transfer of the data can exceed 60 seconds. A successful call to this endpoint requires bucket owner access.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
         * @param {boolean} [publicResourceFallback] Indicates that for each requested object, OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
         * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        batchSignedS3Download: (accessToken, bucketKey, requests, publicResourceFallback, minutesExpiration, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('batchSignedS3Download', 'bucketKey', bucketKey);
            // verify required parameter 'requests' is not null or undefined
            (0, common_1.assertParamExists)('batchSignedS3Download', 'requests', requests);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/batchsigneds3download`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (publicResourceFallback !== undefined) {
                localVarQueryParameter['public-resource-fallback'] = publicResourceFallback;
            }
            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutesExpiration'] = minutesExpiration;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(requests, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Requests a batch of S3 signed URL with which to upload multiple objects or chunks of multiple objects. As with the Batch Get Download URL endpoint, the requests within the batch are evaluated independently and individual requests can be rejected even if the overall request returns a 200 response code. You can request a maximum of 25 URLs in a single request.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {boolean} [useAcceleration] Whether or not to generate an accelerated signed URL (ie: URLs of the form ...s3-accelerate.amazonaws.com... vs ...s3.amazonaws.com...). When not specified, defaults to true. Providing non-boolean values will result in a 400 error.
         * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
         * @param {Batchsigneds3uploadObject} [requests] An array of objects, each of which represents a signed URL / URLs to retrieve.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        batchSignedS3Upload: (accessToken, bucketKey, useAcceleration, minutesExpiration, requests, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('batchSignedS3Upload', 'bucketKey', bucketKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/batchsigneds3upload`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (useAcceleration !== undefined) {
                localVarQueryParameter['useAcceleration'] = useAcceleration;
            }
            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutesExpiration'] = minutesExpiration;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(requests, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Instructs OSS to complete the object creation process after the bytes have been uploaded directly to S3.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
         * @param {string} contentType Must be exactly &#x60;application/json&#x60;.
         * @param {Completes3uploadBody} body
         * @param {string} [xAdsMetaContentType] The Content-Type value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentDisposition] The Content-Disposition value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentEncoding] The Content-Encoding value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaCacheControl] The Cache-Control value for the uploaded object to record within OSS.
         * @param {string} [xAdsUserDefinedMetadata] This parameter allows setting any custom metadata to be stored with the object, which can be retrieved later on download or when getting the object details.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeSignedS3Upload: (accessToken, bucketKey, objectKey, contentType, body, xAdsMetaContentType, xAdsMetaContentDisposition, xAdsMetaContentEncoding, xAdsMetaCacheControl, xAdsUserDefinedMetadata, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('completeSignedS3Upload', 'bucketKey', bucketKey);
            // verify required parameter 'objectKey' is not null or undefined
            (0, common_1.assertParamExists)('completeSignedS3Upload', 'objectKey', objectKey);
            // verify required parameter 'contentType' is not null or undefined
            (0, common_1.assertParamExists)('completeSignedS3Upload', 'contentType', contentType);
            // verify required parameter 'body' is not null or undefined
            (0, common_1.assertParamExists)('completeSignedS3Upload', 'body', body);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3upload`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xAdsMetaContentType != null) {
                localVarHeaderParameter['x-ads-meta-Content-Type'] = String(xAdsMetaContentType);
            }
            if (xAdsMetaContentDisposition != null) {
                localVarHeaderParameter['x-ads-meta-Content-Disposition'] = String(xAdsMetaContentDisposition);
            }
            if (xAdsMetaContentEncoding != null) {
                localVarHeaderParameter['x-ads-meta-Content-Encoding'] = String(xAdsMetaContentEncoding);
            }
            if (xAdsMetaCacheControl != null) {
                localVarHeaderParameter['x-ads-meta-Cache-Control'] = String(xAdsMetaCacheControl);
            }
            if (xAdsUserDefinedMetadata != null) {
                localVarHeaderParameter['x-ads-user-defined-metadata'] = String(xAdsUserDefinedMetadata);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(body, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Copies an object to another object name in the same bucket.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {string} newObjName URL-encoded Object key to use as the destination
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copyTo: (accessToken, bucketKey, objectKey, newObjName, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('copyTo', 'bucketKey', bucketKey);
            // verify required parameter 'objectKey' is not null or undefined
            (0, common_1.assertParamExists)('copyTo', 'objectKey', objectKey);
            // verify required parameter 'newObjName' is not null or undefined
            (0, common_1.assertParamExists)('copyTo', 'newObjName', newObjName);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/copyto/{newObjName}`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)))
                .replace(`{${"newObjName"}}`, encodeURIComponent(String(newObjName)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (xAdsAcmNamespace != null) {
                localVarHeaderParameter['x-ads-acm-namespace'] = String(xAdsAcmNamespace);
            }
            if (xAdsAcmCheckGroups != null) {
                localVarHeaderParameter['x-ads-acm-check-groups'] = String(xAdsAcmCheckGroups);
            }
            if (xAdsAcmGroups != null) {
                localVarHeaderParameter['x-ads-acm-groups'] = String(xAdsAcmGroups);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket.
         * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60;
         * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request).
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBucket: (accessToken, xAdsRegion, policyKey, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'xAdsRegion' is not null or undefined
            (0, common_1.assertParamExists)('createBucket', 'xAdsRegion', xAdsRegion);
            // verify required parameter 'policyKey' is not null or undefined
            (0, common_1.assertParamExists)('createBucket', 'policyKey', policyKey);
            const localVarPath = `/oss/v2/buckets`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(policyKey, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * This endpoint creates a signed URL that can be used to download an object within the specified expiration time. Be aware that if the object the signed URL points to is deleted or expires before the signed URL expires, then the signed URL will no longer be valid. A successful call to this endpoint requires bucket owner access.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {CreateSignedResourceAccessEnum} [access] Access for signed resource Acceptable values: &#x60;read&#x60;, &#x60;write&#x60;, &#x60;readwrite&#x60;. Default value: &#x60;read&#x60;
         * @param {boolean} [useCdn] When this is provided, OSS will return a URL that does not point to https://developer.api.autodesk.com.... , but instead points towards an alternate domain. A client can then interact with this public resource exactly as they would for a classic public resource in OSS, i.e. make a GET request to download an object or a PUT request to upload an object.
         * @param {CreateSignedResource} [createSignedResource]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSignedResource: (accessToken, bucketKey, objectKey, access, useCdn, createSignedResource, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('createSignedResource', 'bucketKey', bucketKey);
            // verify required parameter 'objectKey' is not null or undefined
            (0, common_1.assertParamExists)('createSignedResource', 'objectKey', objectKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signed`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (access !== undefined) {
                localVarQueryParameter['access'] = access;
            }
            if (useCdn !== undefined) {
                localVarQueryParameter['useCdn'] = useCdn;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createSignedResource, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Delete the bucket with the specified key
         * @param {string} bucketKey URL-encoded bucket key
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBucket: (accessToken, bucketKey, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('deleteBucket', 'bucketKey', bucketKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Deletes an object from the bucket.
         * @param {string} bucketKey URL-encoded key of the bucket containing the object.
         * @param {string} objectKey URL-encoded key of the object to delete.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteObject: (accessToken, bucketKey, objectKey, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('deleteObject', 'bucketKey', bucketKey);
            // verify required parameter 'objectKey' is not null or undefined
            (0, common_1.assertParamExists)('deleteObject', 'objectKey', objectKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (xAdsAcmNamespace != null) {
                localVarHeaderParameter['x-ads-acm-namespace'] = String(xAdsAcmNamespace);
            }
            if (xAdsAcmCheckGroups != null) {
                localVarHeaderParameter['x-ads-acm-check-groups'] = String(xAdsAcmCheckGroups);
            }
            if (xAdsAcmGroups != null) {
                localVarHeaderParameter['x-ads-acm-groups'] = String(xAdsAcmGroups);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
         * @param {string} hash Hash of signed resource
         * @param {DeleteSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSignedResource: (accessToken, hash, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'hash' is not null or undefined
            (0, common_1.assertParamExists)('deleteSignedResource', 'hash', hash);
            const localVarPath = `/oss/v2/signedresources/{hash}`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * This endpoint will return the details about the specified bucket.
         * @param {string} bucketKey URL-encoded bucket key
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBucketDetails: (accessToken, bucketKey, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('getBucketDetails', 'bucketKey', bucketKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/details`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * This endpoint will return the buckets owned by the application. This endpoint supports pagination.
         * @param {GetBucketsRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
         * @param {string} [startAt] Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBuckets: (accessToken, region, limit, startAt, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/oss/v2/buckets`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (startAt !== undefined) {
                localVarQueryParameter['startAt'] = startAt;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Returns object details in JSON format.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {GetObjectDetailsWithEnum} [_with] Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60;, &#x60;userDefinedMetadata&#x60;
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectDetails: (accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('getObjectDetails', 'bucketKey', bucketKey);
            // verify required parameter 'objectKey' is not null or undefined
            (0, common_1.assertParamExists)('getObjectDetails', 'objectKey', objectKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/details`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (_with !== undefined) {
                localVarQueryParameter['with'] = _with;
            }
            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = typeof ifModifiedSince === 'string'
                    ? ifModifiedSince
                    : JSON.stringify(ifModifiedSince);
            }
            if (xAdsAcmNamespace != null) {
                localVarHeaderParameter['x-ads-acm-namespace'] = String(xAdsAcmNamespace);
            }
            if (xAdsAcmCheckGroups != null) {
                localVarHeaderParameter['x-ads-acm-check-groups'] = String(xAdsAcmCheckGroups);
            }
            if (xAdsAcmGroups != null) {
                localVarHeaderParameter['x-ads-acm-groups'] = String(xAdsAcmGroups);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * List objects in a bucket. It is only available to the bucket creator.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
         * @param {string} [beginsWith] Provides a way to filter the based on object key name
         * @param {string} [startAt] Key to use as an offset to continue pagination. This is typically the last bucket key found in a preceding GET buckets response
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjects: (accessToken, bucketKey, limit, beginsWith, startAt, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('getObjects', 'bucketKey', bucketKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (beginsWith !== undefined) {
                localVarQueryParameter['beginsWith'] = beginsWith;
            }
            if (startAt !== undefined) {
                localVarQueryParameter['startAt'] = startAt;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Download an object using a signed URL.
         * @param {string} hash Hash of signed resource
         * @param {string} [range] A range of bytes to download from the specified object.
         * @param {string} [ifNoneMatch] The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
         * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
         * @param {string} [acceptEncoding] When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used.
         * @param {GetSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param {string} [responseContentDisposition] Value of the Content-Disposition HTTP header you expect to receive. If the parameter is not provided, the value associated with the object is used.
         * @param {string} [responseContentType] Value of the Content-Type HTTP header you expect to receive in the download response.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSignedResource: (accessToken, hash, range, ifNoneMatch, ifModifiedSince, acceptEncoding, region, responseContentDisposition, responseContentType, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'hash' is not null or undefined
            (0, common_1.assertParamExists)('getSignedResource', 'hash', hash);
            const localVarPath = `/oss/v2/signedresources/{hash}`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (responseContentDisposition !== undefined) {
                localVarQueryParameter['response-content-disposition'] = responseContentDisposition;
            }
            if (responseContentType !== undefined) {
                localVarQueryParameter['response-content-type'] = responseContentType;
            }
            if (range != null) {
                localVarHeaderParameter['Range'] = String(range);
            }
            if (ifNoneMatch != null) {
                localVarHeaderParameter['If-None-Match'] = String(ifNoneMatch);
            }
            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = typeof ifModifiedSince === 'string'
                    ? ifModifiedSince
                    : JSON.stringify(ifModifiedSince);
            }
            if (acceptEncoding != null) {
                localVarHeaderParameter['Accept-Encoding'] = String(acceptEncoding);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Returns an empty response body and a 200 response code if the object exists.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {HeadObjectDetailsWithEnum} [_with] Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60;
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        headObjectDetails: (accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('headObjectDetails', 'bucketKey', bucketKey);
            // verify required parameter 'objectKey' is not null or undefined
            (0, common_1.assertParamExists)('headObjectDetails', 'objectKey', objectKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/details`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'HEAD' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (_with !== undefined) {
                localVarQueryParameter['with'] = _with;
            }
            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = typeof ifModifiedSince === 'string'
                    ? ifModifiedSince
                    : JSON.stringify(ifModifiedSince);
            }
            if (xAdsAcmNamespace != null) {
                localVarHeaderParameter['x-ads-acm-namespace'] = String(xAdsAcmNamespace);
            }
            if (xAdsAcmCheckGroups != null) {
                localVarHeaderParameter['x-ads-acm-check-groups'] = String(xAdsAcmCheckGroups);
            }
            if (xAdsAcmGroups != null) {
                localVarHeaderParameter['x-ads-acm-groups'] = String(xAdsAcmGroups);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Upload an object to this bucket using the body of a POST request, as multipart form data. If during the upload, OSS determines that the combination of bucket key + object key already exists, then the uploaded content will overwrite the existing object. Even if it is possible to upload multiple files in the same request, it is better to create one request for each and paralellize the uploads.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {number} contentLength Indicates the size of the request body. Since the multipart type is complex, this is usually computed after building the body and getting its length.
         * @param {string} xAdsObjectName The key of the object being uploaded. Must be URL-encoded, and it must be 3-1024 characters including any UTF-8 encoding for foreign character support. If an object with this key already exists in the bucket, the object will be overwritten.
         * @param {number} xAdsObjectSize The size in bytes of the file to upload.
         * @param {string} [contentType] Must be the multipart type followed by the boundary used; example: \&#39;multipart/form-data, boundary&#x3D;AaB03x\&#39;.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {string} [xAdsMetaCacheControl] The value of this header will be stored with the uploaded object. The value will be used as the \&#39;Cache-Control\&#39; header in the response when the object is downloaded.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUpload: (accessToken, bucketKey, contentLength, xAdsObjectName, xAdsObjectSize, contentType, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, xAdsMetaCacheControl, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('postUpload', 'bucketKey', bucketKey);
            // verify required parameter 'contentLength' is not null or undefined
            (0, common_1.assertParamExists)('postUpload', 'contentLength', contentLength);
            // verify required parameter 'xAdsObjectName' is not null or undefined
            (0, common_1.assertParamExists)('postUpload', 'xAdsObjectName', xAdsObjectName);
            // verify required parameter 'xAdsObjectSize' is not null or undefined
            (0, common_1.assertParamExists)('postUpload', 'xAdsObjectSize', xAdsObjectSize);
            const localVarPath = `/oss/v2/buckets/{bucketKey}`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (contentLength != null) {
                localVarHeaderParameter['Content-Length'] = typeof contentLength === 'string'
                    ? contentLength
                    : JSON.stringify(contentLength);
            }
            if (xAdsObjectName != null) {
                localVarHeaderParameter['x-ads-object-name'] = String(xAdsObjectName);
            }
            if (xAdsObjectSize != null) {
                localVarHeaderParameter['x-ads-object-size'] = typeof xAdsObjectSize === 'string'
                    ? xAdsObjectSize
                    : JSON.stringify(xAdsObjectSize);
            }
            if (xAdsAcmNamespace != null) {
                localVarHeaderParameter['x-ads-acm-namespace'] = String(xAdsAcmNamespace);
            }
            if (xAdsAcmCheckGroups != null) {
                localVarHeaderParameter['x-ads-acm-check-groups'] = String(xAdsAcmCheckGroups);
            }
            if (xAdsAcmGroups != null) {
                localVarHeaderParameter['x-ads-acm-groups'] = String(xAdsAcmGroups);
            }
            if (xAdsMetaCacheControl != null) {
                localVarHeaderParameter['x-ads-meta-Cache-Control'] = String(xAdsMetaCacheControl);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Gets a signed URL to a download an object directly from S3, bypassing OSS servers. This signed URL expires in 60 seconds, so the request must begin within that time frame; the actual data transfer can take longer. Note that resumable uploads store each chunk individually; after the upload completes, an async process merges all the chunks and creates the definitive OSS file. If you request a signed URL before the async process completes, the response returns a map of S3 URLs, one per chunk; the key is the byte range of the total file to which the chunk corresponds. If you need a single URL in the response, you can use OSS signed resource functionality by setting the \'public-resource-fallback\' query parameter to true. Lastly, note that ranged downloads can be used with the returned URL.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
         * @param {string} [ifNoneMatch] If the value of this header matches the ETag of the object, an entity will not be returned from the server; instead a 304 (not modified) response will be returned without any message-body.
         * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message-body.
         * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
         * @param {string} [responseContentType] Value of the Content-Type header that the client expects to receive from S3. If this attribute is not provided, it defaults to the value corresponding to the object.
         * @param {string} [responseContentDisposition] Value of the Content-Disposition header that the client expects to receive. If this attribute is not provided, it defaults to the value corresponding to the object.
         * @param {string} [responseCacheControl] Value of the Cache-Control header that the client expects to receive from S3. If this attribute is not provided, it defaults to the value corresponding to the object.
         * @param {boolean} [publicResourceFallback] Indicates that OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
         * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
         * @param {boolean} [useCdn] This will generate a CloudFront URL for the S3 object.
         * @param {boolean} [redirect] Generates a HTTP redirection response (Temporary Redirect 307​) using the generated URL.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signedS3Download: (accessToken, bucketKey, objectKey, ifNoneMatch, ifModifiedSince, xAdsAcmScopes, responseContentType, responseContentDisposition, responseCacheControl, publicResourceFallback, minutesExpiration, useCdn, redirect, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('signedS3Download', 'bucketKey', bucketKey);
            // verify required parameter 'objectKey' is not null or undefined
            (0, common_1.assertParamExists)('signedS3Download', 'objectKey', objectKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3download`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (responseContentType !== undefined) {
                localVarQueryParameter['response-content-type'] = responseContentType;
            }
            if (responseContentDisposition !== undefined) {
                localVarQueryParameter['response-content-disposition'] = responseContentDisposition;
            }
            if (responseCacheControl !== undefined) {
                localVarQueryParameter['response-cache-control'] = responseCacheControl;
            }
            if (publicResourceFallback !== undefined) {
                localVarQueryParameter['public-resource-fallback'] = publicResourceFallback;
            }
            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutesExpiration'] = minutesExpiration;
            }
            if (useCdn !== undefined) {
                localVarQueryParameter['useCdn'] = useCdn;
            }
            if (redirect !== undefined) {
                localVarQueryParameter['redirect'] = redirect;
            }
            if (ifNoneMatch != null) {
                localVarHeaderParameter['If-None-Match'] = String(ifNoneMatch);
            }
            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = typeof ifModifiedSince === 'string'
                    ? ifModifiedSince
                    : JSON.stringify(ifModifiedSince);
            }
            if (xAdsAcmScopes != null) {
                localVarHeaderParameter['x-ads-acm-scopes'] = String(xAdsAcmScopes);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Gets a signed URL to upload an object in a single request, or an array of signed URLs with which to upload an object in multiple parts.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
         * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
         * @param {number} [parts] For a multipart upload, the number of chunk upload URLs to return. If X is provided, the response will include chunk URLs from 1 to X. If none provided, the response will include only a single URL with which to upload an entire object.
         * @param {number} [firstPart] Index of first part in the parts collection.
         * @param {string} [uploadKey] The identifier of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. This must match the &#x60;uploadKey&#x60; returned by a previous call to this endpoint where the client requested more than one part URL. If none provided, OSS will initiate a new upload entirely.
         * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signedS3Upload: (accessToken, bucketKey, objectKey, xAdsAcmScopes, parts, firstPart, uploadKey, minutesExpiration, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'bucketKey' is not null or undefined
            (0, common_1.assertParamExists)('signedS3Upload', 'bucketKey', bucketKey);
            // verify required parameter 'objectKey' is not null or undefined
            (0, common_1.assertParamExists)('signedS3Upload', 'objectKey', objectKey);
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3upload`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (parts !== undefined) {
                localVarQueryParameter['parts'] = parts;
            }
            if (firstPart !== undefined) {
                localVarQueryParameter['firstPart'] = firstPart;
            }
            if (uploadKey !== undefined) {
                localVarQueryParameter['uploadKey'] = uploadKey;
            }
            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutesExpiration'] = minutesExpiration;
            }
            if (xAdsAcmScopes != null) {
                localVarHeaderParameter['x-ads-acm-scopes'] = String(xAdsAcmScopes);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Upload an object using a signed URL. If the signed resource is available and its expiration period is valid, you can overwrite the existing object via a signed URL upload using the \'access\' query parameter with value \'write\' or \'readwrite\'.
         * @param {string} hash Hash of signed resource
         * @param {number} contentLength Indicates the size of the request body.
         * @param {File} body The object to upload.
         * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
         * @param {string} [contentDisposition] The suggested default filename when downloading this object to a file after it has been uploaded.
         * @param {UploadSignedResourceXAdsRegionEnum} [xAdsRegion] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param {string} [ifMatch] If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadSignedResource: (accessToken, hash, contentLength, body, contentType, contentDisposition, xAdsRegion, ifMatch, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'hash' is not null or undefined
            (0, common_1.assertParamExists)('uploadSignedResource', 'hash', hash);
            // verify required parameter 'contentLength' is not null or undefined
            (0, common_1.assertParamExists)('uploadSignedResource', 'contentLength', contentLength);
            // verify required parameter 'body' is not null or undefined
            (0, common_1.assertParamExists)('uploadSignedResource', 'body', body);
            const localVarPath = `/oss/v2/signedresources/{hash}`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new URLSearchParams();
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (contentLength != null) {
                localVarHeaderParameter['Content-Length'] = typeof contentLength === 'string'
                    ? contentLength
                    : JSON.stringify(contentLength);
            }
            if (contentDisposition != null) {
                localVarHeaderParameter['Content-Disposition'] = String(contentDisposition);
            }
            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }
            if (ifMatch != null) {
                localVarHeaderParameter['If-Match'] = String(ifMatch);
            }
            if (body !== undefined) {
                localVarFormParams.set('body', body);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams.toString();
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Resumable upload for signed URLs.
         * @param {string} hash Hash of the signed resource
         * @param {string} contentRange Byte range of a segment being uploaded
         * @param {string} sessionId Unique identifier of a session of a file being uploaded
         * @param {File} body The chunk to upload.
         * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
         * @param {string} [contentDisposition] The suggested default filename when downloading this object to a file after it has been uploaded.
         * @param {UploadSignedResourcesChunkXAdsRegionEnum} [xAdsRegion] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadSignedResourcesChunk: (accessToken, hash, contentRange, sessionId, body, contentType, contentDisposition, xAdsRegion, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'hash' is not null or undefined
            (0, common_1.assertParamExists)('uploadSignedResourcesChunk', 'hash', hash);
            // verify required parameter 'contentRange' is not null or undefined
            (0, common_1.assertParamExists)('uploadSignedResourcesChunk', 'contentRange', contentRange);
            // verify required parameter 'sessionId' is not null or undefined
            (0, common_1.assertParamExists)('uploadSignedResourcesChunk', 'sessionId', sessionId);
            // verify required parameter 'body' is not null or undefined
            (0, common_1.assertParamExists)('uploadSignedResourcesChunk', 'body', body);
            const localVarPath = `/oss/v2/signedresources/{hash}/resumable`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new URLSearchParams();
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (contentRange != null) {
                localVarHeaderParameter['Content-Range'] = String(contentRange);
            }
            if (contentDisposition != null) {
                localVarHeaderParameter['Content-Disposition'] = String(contentDisposition);
            }
            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }
            if (sessionId != null) {
                localVarHeaderParameter['Session-Id'] = String(sessionId);
            }
            if (body !== undefined) {
                localVarFormParams.set('body', body);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams.toString();
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.OSSApiAxiosParamCreator = OSSApiAxiosParamCreator;
/**
 * OSSApi - functional programming interface
 * @export
 */
const OSSApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.OSSApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        batchCompleteUpload(accessToken, bucketKey, requests, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.batchCompleteUpload(accessToken, bucketKey, requests, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Gets one or more signed URLs to download objects. The signed URLs can be used to download the objects directly from S3, skipping OSS servers. Be aware that expiration time for the signed URL(s) is just 60 seconds. So, a request to the URL(s) must begin within 60 seconds; the transfer of the data can exceed 60 seconds. A successful call to this endpoint requires bucket owner access.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
         * @param {boolean} [publicResourceFallback] Indicates that for each requested object, OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
         * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        batchSignedS3Download(accessToken, bucketKey, requests, publicResourceFallback, minutesExpiration, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.batchSignedS3Download(accessToken, bucketKey, requests, publicResourceFallback, minutesExpiration, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Requests a batch of S3 signed URL with which to upload multiple objects or chunks of multiple objects. As with the Batch Get Download URL endpoint, the requests within the batch are evaluated independently and individual requests can be rejected even if the overall request returns a 200 response code. You can request a maximum of 25 URLs in a single request.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {boolean} [useAcceleration] Whether or not to generate an accelerated signed URL (ie: URLs of the form ...s3-accelerate.amazonaws.com... vs ...s3.amazonaws.com...). When not specified, defaults to true. Providing non-boolean values will result in a 400 error.
         * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
         * @param {Batchsigneds3uploadObject} [requests] An array of objects, each of which represents a signed URL / URLs to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        batchSignedS3Upload(accessToken, bucketKey, useAcceleration, minutesExpiration, requests, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.batchSignedS3Upload(accessToken, bucketKey, useAcceleration, minutesExpiration, requests, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Instructs OSS to complete the object creation process after the bytes have been uploaded directly to S3.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
         * @param {string} contentType Must be exactly &#x60;application/json&#x60;.
         * @param {Completes3uploadBody} body
         * @param {string} [xAdsMetaContentType] The Content-Type value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentDisposition] The Content-Disposition value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentEncoding] The Content-Encoding value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaCacheControl] The Cache-Control value for the uploaded object to record within OSS.
         * @param {string} [xAdsUserDefinedMetadata] This parameter allows setting any custom metadata to be stored with the object, which can be retrieved later on download or when getting the object details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeSignedS3Upload(accessToken, bucketKey, objectKey, contentType, body, xAdsMetaContentType, xAdsMetaContentDisposition, xAdsMetaContentEncoding, xAdsMetaCacheControl, xAdsUserDefinedMetadata, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.completeSignedS3Upload(accessToken, bucketKey, objectKey, contentType, body, xAdsMetaContentType, xAdsMetaContentDisposition, xAdsMetaContentEncoding, xAdsMetaCacheControl, xAdsUserDefinedMetadata, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Copies an object to another object name in the same bucket.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {string} newObjName URL-encoded Object key to use as the destination
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copyTo(accessToken, bucketKey, objectKey, newObjName, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.copyTo(accessToken, bucketKey, objectKey, newObjName, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket.
         * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60;
         * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBucket(accessToken, xAdsRegion, policyKey, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createBucket(accessToken, xAdsRegion, policyKey, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * This endpoint creates a signed URL that can be used to download an object within the specified expiration time. Be aware that if the object the signed URL points to is deleted or expires before the signed URL expires, then the signed URL will no longer be valid. A successful call to this endpoint requires bucket owner access.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {CreateSignedResourceAccessEnum} [access] Access for signed resource Acceptable values: &#x60;read&#x60;, &#x60;write&#x60;, &#x60;readwrite&#x60;. Default value: &#x60;read&#x60;
         * @param {boolean} [useCdn] When this is provided, OSS will return a URL that does not point to https://developer.api.autodesk.com.... , but instead points towards an alternate domain. A client can then interact with this public resource exactly as they would for a classic public resource in OSS, i.e. make a GET request to download an object or a PUT request to upload an object.
         * @param {CreateSignedResource} [createSignedResource]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSignedResource(accessToken, bucketKey, objectKey, access, useCdn, createSignedResource, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createSignedResource(accessToken, bucketKey, objectKey, access, useCdn, createSignedResource, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Delete the bucket with the specified key
         * @param {string} bucketKey URL-encoded bucket key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBucket(accessToken, bucketKey, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteBucket(accessToken, bucketKey, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Deletes an object from the bucket.
         * @param {string} bucketKey URL-encoded key of the bucket containing the object.
         * @param {string} objectKey URL-encoded key of the object to delete.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteObject(accessToken, bucketKey, objectKey, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteObject(accessToken, bucketKey, objectKey, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
         * @param {string} hash Hash of signed resource
         * @param {DeleteSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSignedResource(accessToken, hash, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteSignedResource(accessToken, hash, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * This endpoint will return the details about the specified bucket.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBucketDetails(accessToken, bucketKey, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getBucketDetails(accessToken, bucketKey, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * This endpoint will return the buckets owned by the application. This endpoint supports pagination.
         * @param {GetBucketsRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
         * @param {string} [startAt] Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBuckets(accessToken, region, limit, startAt, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getBuckets(accessToken, region, limit, startAt, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns object details in JSON format.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {GetObjectDetailsWithEnum} [_with] Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60;, &#x60;userDefinedMetadata&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * List objects in a bucket. It is only available to the bucket creator.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
         * @param {string} [beginsWith] Provides a way to filter the based on object key name
         * @param {string} [startAt] Key to use as an offset to continue pagination. This is typically the last bucket key found in a preceding GET buckets response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjects(accessToken, bucketKey, limit, beginsWith, startAt, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getObjects(accessToken, bucketKey, limit, beginsWith, startAt, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Download an object using a signed URL.
         * @param {string} hash Hash of signed resource
         * @param {string} [range] A range of bytes to download from the specified object.
         * @param {string} [ifNoneMatch] The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
         * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
         * @param {string} [acceptEncoding] When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used.
         * @param {GetSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param {string} [responseContentDisposition] Value of the Content-Disposition HTTP header you expect to receive. If the parameter is not provided, the value associated with the object is used.
         * @param {string} [responseContentType] Value of the Content-Type HTTP header you expect to receive in the download response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSignedResource(accessToken, hash, range, ifNoneMatch, ifModifiedSince, acceptEncoding, region, responseContentDisposition, responseContentType, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getSignedResource(accessToken, hash, range, ifNoneMatch, ifModifiedSince, acceptEncoding, region, responseContentDisposition, responseContentType, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns an empty response body and a 200 response code if the object exists.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {HeadObjectDetailsWithEnum} [_with] Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        headObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.headObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Upload an object to this bucket using the body of a POST request, as multipart form data. If during the upload, OSS determines that the combination of bucket key + object key already exists, then the uploaded content will overwrite the existing object. Even if it is possible to upload multiple files in the same request, it is better to create one request for each and paralellize the uploads.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {number} contentLength Indicates the size of the request body. Since the multipart type is complex, this is usually computed after building the body and getting its length.
         * @param {string} xAdsObjectName The key of the object being uploaded. Must be URL-encoded, and it must be 3-1024 characters including any UTF-8 encoding for foreign character support. If an object with this key already exists in the bucket, the object will be overwritten.
         * @param {number} xAdsObjectSize The size in bytes of the file to upload.
         * @param {string} [contentType] Must be the multipart type followed by the boundary used; example: \&#39;multipart/form-data, boundary&#x3D;AaB03x\&#39;.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {string} [xAdsMetaCacheControl] The value of this header will be stored with the uploaded object. The value will be used as the \&#39;Cache-Control\&#39; header in the response when the object is downloaded.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUpload(accessToken, bucketKey, contentLength, xAdsObjectName, xAdsObjectSize, contentType, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, xAdsMetaCacheControl, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.postUpload(accessToken, bucketKey, contentLength, xAdsObjectName, xAdsObjectSize, contentType, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, xAdsMetaCacheControl, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Gets a signed URL to a download an object directly from S3, bypassing OSS servers. This signed URL expires in 60 seconds, so the request must begin within that time frame; the actual data transfer can take longer. Note that resumable uploads store each chunk individually; after the upload completes, an async process merges all the chunks and creates the definitive OSS file. If you request a signed URL before the async process completes, the response returns a map of S3 URLs, one per chunk; the key is the byte range of the total file to which the chunk corresponds. If you need a single URL in the response, you can use OSS signed resource functionality by setting the \'public-resource-fallback\' query parameter to true. Lastly, note that ranged downloads can be used with the returned URL.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
         * @param {string} [ifNoneMatch] If the value of this header matches the ETag of the object, an entity will not be returned from the server; instead a 304 (not modified) response will be returned without any message-body.
         * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message-body.
         * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
         * @param {string} [responseContentType] Value of the Content-Type header that the client expects to receive from S3. If this attribute is not provided, it defaults to the value corresponding to the object.
         * @param {string} [responseContentDisposition] Value of the Content-Disposition header that the client expects to receive. If this attribute is not provided, it defaults to the value corresponding to the object.
         * @param {string} [responseCacheControl] Value of the Cache-Control header that the client expects to receive from S3. If this attribute is not provided, it defaults to the value corresponding to the object.
         * @param {boolean} [publicResourceFallback] Indicates that OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
         * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
         * @param {boolean} [useCdn] This will generate a CloudFront URL for the S3 object.
         * @param {boolean} [redirect] Generates a HTTP redirection response (Temporary Redirect 307​) using the generated URL.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signedS3Download(accessToken, bucketKey, objectKey, ifNoneMatch, ifModifiedSince, xAdsAcmScopes, responseContentType, responseContentDisposition, responseCacheControl, publicResourceFallback, minutesExpiration, useCdn, redirect, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.signedS3Download(accessToken, bucketKey, objectKey, ifNoneMatch, ifModifiedSince, xAdsAcmScopes, responseContentType, responseContentDisposition, responseCacheControl, publicResourceFallback, minutesExpiration, useCdn, redirect, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Gets a signed URL to upload an object in a single request, or an array of signed URLs with which to upload an object in multiple parts.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
         * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
         * @param {number} [parts] For a multipart upload, the number of chunk upload URLs to return. If X is provided, the response will include chunk URLs from 1 to X. If none provided, the response will include only a single URL with which to upload an entire object.
         * @param {number} [firstPart] Index of first part in the parts collection.
         * @param {string} [uploadKey] The identifier of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. This must match the &#x60;uploadKey&#x60; returned by a previous call to this endpoint where the client requested more than one part URL. If none provided, OSS will initiate a new upload entirely.
         * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signedS3Upload(accessToken, bucketKey, objectKey, xAdsAcmScopes, parts, firstPart, uploadKey, minutesExpiration, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.signedS3Upload(accessToken, bucketKey, objectKey, xAdsAcmScopes, parts, firstPart, uploadKey, minutesExpiration, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Upload an object using a signed URL. If the signed resource is available and its expiration period is valid, you can overwrite the existing object via a signed URL upload using the \'access\' query parameter with value \'write\' or \'readwrite\'.
         * @param {string} hash Hash of signed resource
         * @param {number} contentLength Indicates the size of the request body.
         * @param {File} body The object to upload.
         * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
         * @param {string} [contentDisposition] The suggested default filename when downloading this object to a file after it has been uploaded.
         * @param {UploadSignedResourceXAdsRegionEnum} [xAdsRegion] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param {string} [ifMatch] If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadSignedResource(accessToken, hash, contentLength, body, contentType, contentDisposition, xAdsRegion, ifMatch, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.uploadSignedResource(accessToken, hash, contentLength, body, contentType, contentDisposition, xAdsRegion, ifMatch, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Resumable upload for signed URLs.
         * @param {string} hash Hash of the signed resource
         * @param {string} contentRange Byte range of a segment being uploaded
         * @param {string} sessionId Unique identifier of a session of a file being uploaded
         * @param {File} body The chunk to upload.
         * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
         * @param {string} [contentDisposition] The suggested default filename when downloading this object to a file after it has been uploaded.
         * @param {UploadSignedResourcesChunkXAdsRegionEnum} [xAdsRegion] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadSignedResourcesChunk(accessToken, hash, contentRange, sessionId, body, contentType, contentDisposition, xAdsRegion, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.uploadSignedResourcesChunk(accessToken, hash, contentRange, sessionId, body, contentType, contentDisposition, xAdsRegion, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.OSSApiFp = OSSApiFp;
/**
 * OSSApi - object-oriented interface
 * @export
 * @class OSSApi
 * @extends {BaseAPI}
 */
class OSSApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    batchCompleteUpload(accessToken, bucketKey, requests, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into batchCompleteUpload ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).batchCompleteUpload(accessToken, bucketKey, requests, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`batchCompleteUpload Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`batchCompleteUpload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`batchCompleteUpload Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`batchCompleteUpload Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`batchCompleteUpload Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Gets one or more signed URLs to download objects. The signed URLs can be used to download the objects directly from S3, skipping OSS servers. Be aware that expiration time for the signed URL(s) is just 60 seconds. So, a request to the URL(s) must begin within 60 seconds; the transfer of the data can exceed 60 seconds. A successful call to this endpoint requires bucket owner access.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
     * @param {boolean} [publicResourceFallback] Indicates that for each requested object, OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    batchSignedS3Download(accessToken, bucketKey, requests, publicResourceFallback, minutesExpiration, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into batchSignedS3Download ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).batchSignedS3Download(accessToken, bucketKey, requests, publicResourceFallback, minutesExpiration, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`batchSignedS3Download Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`batchSignedS3Download Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`batchSignedS3Download Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`batchSignedS3Download Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`batchSignedS3Download Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Requests a batch of S3 signed URL with which to upload multiple objects or chunks of multiple objects. As with the Batch Get Download URL endpoint, the requests within the batch are evaluated independently and individual requests can be rejected even if the overall request returns a 200 response code. You can request a maximum of 25 URLs in a single request.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {boolean} [useAcceleration] Whether or not to generate an accelerated signed URL (ie: URLs of the form ...s3-accelerate.amazonaws.com... vs ...s3.amazonaws.com...). When not specified, defaults to true. Providing non-boolean values will result in a 400 error.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param {Batchsigneds3uploadObject} [requests] An array of objects, each of which represents a signed URL / URLs to retrieve.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    batchSignedS3Upload(accessToken, bucketKey, useAcceleration, minutesExpiration, requests, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into batchSignedS3Upload ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).batchSignedS3Upload(accessToken, bucketKey, useAcceleration, minutesExpiration, requests, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`batchSignedS3Upload Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`batchSignedS3Upload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`batchSignedS3Upload Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`batchSignedS3Upload Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`batchSignedS3Upload Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Instructs OSS to complete the object creation process after the bytes have been uploaded directly to S3.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
     * @param {string} contentType Must be exactly &#x60;application/json&#x60;.
     * @param {Completes3uploadBody} body
     * @param {string} [xAdsMetaContentType] The Content-Type value for the uploaded object to record within OSS.
     * @param {string} [xAdsMetaContentDisposition] The Content-Disposition value for the uploaded object to record within OSS.
     * @param {string} [xAdsMetaContentEncoding] The Content-Encoding value for the uploaded object to record within OSS.
     * @param {string} [xAdsMetaCacheControl] The Cache-Control value for the uploaded object to record within OSS.
     * @param {string} [xAdsUserDefinedMetadata] This parameter allows setting any custom metadata to be stored with the object, which can be retrieved later on download or when getting the object details.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    completeSignedS3Upload(accessToken, bucketKey, objectKey, contentType, body, xAdsMetaContentType, xAdsMetaContentDisposition, xAdsMetaContentEncoding, xAdsMetaCacheControl, xAdsUserDefinedMetadata, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into completeSignedS3Upload ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).completeSignedS3Upload(accessToken, bucketKey, objectKey, contentType, body, xAdsMetaContentType, xAdsMetaContentDisposition, xAdsMetaContentEncoding, xAdsMetaCacheControl, xAdsUserDefinedMetadata, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`completeSignedS3Upload Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`completeSignedS3Upload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`completeSignedS3Upload Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`completeSignedS3Upload Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`completeSignedS3Upload Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Copies an object to another object name in the same bucket.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey URL-encoded object name
     * @param {string} newObjName URL-encoded Object key to use as the destination
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    copyTo(accessToken, bucketKey, objectKey, newObjName, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into copyTo ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).copyTo(accessToken, bucketKey, objectKey, newObjName, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`copyTo Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`copyTo Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`copyTo Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`copyTo Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`copyTo Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket.
     * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60;
     * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    createBucket(accessToken, xAdsRegion, policyKey, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createBucket ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).createBucket(accessToken, xAdsRegion, policyKey, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createBucket Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createBucket Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`createBucket Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createBucket Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`createBucket Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * This endpoint creates a signed URL that can be used to download an object within the specified expiration time. Be aware that if the object the signed URL points to is deleted or expires before the signed URL expires, then the signed URL will no longer be valid. A successful call to this endpoint requires bucket owner access.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey URL-encoded object name
     * @param {CreateSignedResourceAccessEnum} [access] Access for signed resource Acceptable values: &#x60;read&#x60;, &#x60;write&#x60;, &#x60;readwrite&#x60;. Default value: &#x60;read&#x60;
     * @param {boolean} [useCdn] When this is provided, OSS will return a URL that does not point to https://developer.api.autodesk.com.... , but instead points towards an alternate domain. A client can then interact with this public resource exactly as they would for a classic public resource in OSS, i.e. make a GET request to download an object or a PUT request to upload an object.
     * @param {CreateSignedResource} [createSignedResource]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    createSignedResource(accessToken, bucketKey, objectKey, access, useCdn, createSignedResource, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createSignedResource ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).createSignedResource(accessToken, bucketKey, objectKey, access, useCdn, createSignedResource, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createSignedResource Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createSignedResource Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`createSignedResource Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createSignedResource Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`createSignedResource Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Delete the bucket with the specified key
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    deleteBucket(accessToken, bucketKey, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into deleteBucket ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).deleteBucket(accessToken, bucketKey, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`deleteBucket Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`deleteBucket Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`deleteBucket Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`deleteBucket Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`deleteBucket Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Deletes an object from the bucket.
     * @param {string} bucketKey URL-encoded key of the bucket containing the object.
     * @param {string} objectKey URL-encoded key of the object to delete.
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    deleteObject(accessToken, bucketKey, objectKey, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into deleteObject ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).deleteObject(accessToken, bucketKey, objectKey, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`deleteObject Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`deleteObject Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`deleteObject Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`deleteObject Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`deleteObject Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
     * @param {string} hash Hash of signed resource
     * @param {DeleteSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    deleteSignedResource(accessToken, hash, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into deleteSignedResource ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).deleteSignedResource(accessToken, hash, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`deleteSignedResource Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`deleteSignedResource Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`deleteSignedResource Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`deleteSignedResource Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`deleteSignedResource Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * This endpoint will return the details about the specified bucket.
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    getBucketDetails(accessToken, bucketKey, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getBucketDetails ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).getBucketDetails(accessToken, bucketKey, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getBucketDetails Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getBucketDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`getBucketDetails Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getBucketDetails Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`getBucketDetails Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * This endpoint will return the buckets owned by the application. This endpoint supports pagination.
     * @param {GetBucketsRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
     * @param {string} [startAt] Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    getBuckets(accessToken, region, limit, startAt, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getBuckets ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).getBuckets(accessToken, region, limit, startAt, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getBuckets Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getBuckets Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`getBuckets Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getBuckets Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`getBuckets Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns object details in JSON format.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey URL-encoded object name
     * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param {GetObjectDetailsWithEnum} [_with] Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60;, &#x60;userDefinedMetadata&#x60;
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    getObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getObjectDetails ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).getObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getObjectDetails Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getObjectDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`getObjectDetails Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getObjectDetails Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`getObjectDetails Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * List objects in a bucket. It is only available to the bucket creator.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
     * @param {string} [beginsWith] Provides a way to filter the based on object key name
     * @param {string} [startAt] Key to use as an offset to continue pagination. This is typically the last bucket key found in a preceding GET buckets response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    getObjects(accessToken, bucketKey, limit, beginsWith, startAt, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getObjects ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).getObjects(accessToken, bucketKey, limit, beginsWith, startAt, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getObjects Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getObjects Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`getObjects Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getObjects Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`getObjects Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Download an object using a signed URL.
     * @param {string} hash Hash of signed resource
     * @param {string} [range] A range of bytes to download from the specified object.
     * @param {string} [ifNoneMatch] The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
     * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
     * @param {string} [acceptEncoding] When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used.
     * @param {GetSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param {string} [responseContentDisposition] Value of the Content-Disposition HTTP header you expect to receive. If the parameter is not provided, the value associated with the object is used.
     * @param {string} [responseContentType] Value of the Content-Type HTTP header you expect to receive in the download response.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    getSignedResource(accessToken, hash, range, ifNoneMatch, ifModifiedSince, acceptEncoding, region, responseContentDisposition, responseContentType, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getSignedResource ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).getSignedResource(accessToken, hash, range, ifNoneMatch, ifModifiedSince, acceptEncoding, region, responseContentDisposition, responseContentType, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getSignedResource Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getSignedResource Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`getSignedResource Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getSignedResource Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`getSignedResource Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns an empty response body and a 200 response code if the object exists.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey URL-encoded object name
     * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param {HeadObjectDetailsWithEnum} [_with] Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60;
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    headObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into headObjectDetails ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).headObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, _with, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`headObjectDetails Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`headObjectDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`headObjectDetails Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`headObjectDetails Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`headObjectDetails Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Upload an object to this bucket using the body of a POST request, as multipart form data. If during the upload, OSS determines that the combination of bucket key + object key already exists, then the uploaded content will overwrite the existing object. Even if it is possible to upload multiple files in the same request, it is better to create one request for each and paralellize the uploads.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {number} contentLength Indicates the size of the request body. Since the multipart type is complex, this is usually computed after building the body and getting its length.
     * @param {string} xAdsObjectName The key of the object being uploaded. Must be URL-encoded, and it must be 3-1024 characters including any UTF-8 encoding for foreign character support. If an object with this key already exists in the bucket, the object will be overwritten.
     * @param {number} xAdsObjectSize The size in bytes of the file to upload.
     * @param {string} [contentType] Must be the multipart type followed by the boundary used; example: \&#39;multipart/form-data, boundary&#x3D;AaB03x\&#39;.
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param {string} [xAdsMetaCacheControl] The value of this header will be stored with the uploaded object. The value will be used as the \&#39;Cache-Control\&#39; header in the response when the object is downloaded.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    postUpload(accessToken, bucketKey, contentLength, xAdsObjectName, xAdsObjectSize, contentType, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, xAdsMetaCacheControl, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into postUpload ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).postUpload(accessToken, bucketKey, contentLength, xAdsObjectName, xAdsObjectSize, contentType, xAdsAcmNamespace, xAdsAcmCheckGroups, xAdsAcmGroups, xAdsMetaCacheControl, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`postUpload Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`postUpload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`postUpload Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`postUpload Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`postUpload Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Gets a signed URL to a download an object directly from S3, bypassing OSS servers. This signed URL expires in 60 seconds, so the request must begin within that time frame; the actual data transfer can take longer. Note that resumable uploads store each chunk individually; after the upload completes, an async process merges all the chunks and creates the definitive OSS file. If you request a signed URL before the async process completes, the response returns a map of S3 URLs, one per chunk; the key is the byte range of the total file to which the chunk corresponds. If you need a single URL in the response, you can use OSS signed resource functionality by setting the \'public-resource-fallback\' query parameter to true. Lastly, note that ranged downloads can be used with the returned URL.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
     * @param {string} [ifNoneMatch] If the value of this header matches the ETag of the object, an entity will not be returned from the server; instead a 304 (not modified) response will be returned without any message-body.
     * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message-body.
     * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
     * @param {string} [responseContentType] Value of the Content-Type header that the client expects to receive from S3. If this attribute is not provided, it defaults to the value corresponding to the object.
     * @param {string} [responseContentDisposition] Value of the Content-Disposition header that the client expects to receive. If this attribute is not provided, it defaults to the value corresponding to the object.
     * @param {string} [responseCacheControl] Value of the Cache-Control header that the client expects to receive from S3. If this attribute is not provided, it defaults to the value corresponding to the object.
     * @param {boolean} [publicResourceFallback] Indicates that OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param {boolean} [useCdn] This will generate a CloudFront URL for the S3 object.
     * @param {boolean} [redirect] Generates a HTTP redirection response (Temporary Redirect 307​) using the generated URL.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    signedS3Download(accessToken, bucketKey, objectKey, ifNoneMatch, ifModifiedSince, xAdsAcmScopes, responseContentType, responseContentDisposition, responseCacheControl, publicResourceFallback, minutesExpiration, useCdn, redirect, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into signedS3Download ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).signedS3Download(accessToken, bucketKey, objectKey, ifNoneMatch, ifModifiedSince, xAdsAcmScopes, responseContentType, responseContentDisposition, responseCacheControl, publicResourceFallback, minutesExpiration, useCdn, redirect, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`signedS3Download Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`signedS3Download Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`signedS3Download Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`signedS3Download Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`signedS3Download Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Gets a signed URL to upload an object in a single request, or an array of signed URLs with which to upload an object in multiple parts.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
     * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
     * @param {number} [parts] For a multipart upload, the number of chunk upload URLs to return. If X is provided, the response will include chunk URLs from 1 to X. If none provided, the response will include only a single URL with which to upload an entire object.
     * @param {number} [firstPart] Index of first part in the parts collection.
     * @param {string} [uploadKey] The identifier of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. This must match the &#x60;uploadKey&#x60; returned by a previous call to this endpoint where the client requested more than one part URL. If none provided, OSS will initiate a new upload entirely.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    signedS3Upload(accessToken, bucketKey, objectKey, xAdsAcmScopes, parts, firstPart, uploadKey, minutesExpiration, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into signedS3Upload ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).signedS3Upload(accessToken, bucketKey, objectKey, xAdsAcmScopes, parts, firstPart, uploadKey, minutesExpiration, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`signedS3Upload Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`signedS3Upload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`signedS3Upload Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`signedS3Upload Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`signedS3Upload Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Upload an object using a signed URL. If the signed resource is available and its expiration period is valid, you can overwrite the existing object via a signed URL upload using the \'access\' query parameter with value \'write\' or \'readwrite\'.
     * @param {string} hash Hash of signed resource
     * @param {number} contentLength Indicates the size of the request body.
     * @param {File} body The object to upload.
     * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
     * @param {string} [contentDisposition] The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {UploadSignedResourceXAdsRegionEnum} [xAdsRegion] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param {string} [ifMatch] If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    uploadSignedResource(accessToken, hash, contentLength, body, contentType, contentDisposition, xAdsRegion, ifMatch, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into uploadSignedResource ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).uploadSignedResource(accessToken, hash, contentLength, body, contentType, contentDisposition, xAdsRegion, ifMatch, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`uploadSignedResource Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`uploadSignedResource Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`uploadSignedResource Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`uploadSignedResource Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`uploadSignedResource Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Resumable upload for signed URLs.
     * @param {string} hash Hash of the signed resource
     * @param {string} contentRange Byte range of a segment being uploaded
     * @param {string} sessionId Unique identifier of a session of a file being uploaded
     * @param {File} body The chunk to upload.
     * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
     * @param {string} [contentDisposition] The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {UploadSignedResourcesChunkXAdsRegionEnum} [xAdsRegion] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    uploadSignedResourcesChunk(accessToken, hash, contentRange, sessionId, body, contentType, contentDisposition, xAdsRegion, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into uploadSignedResourcesChunk ");
            try {
                const request = yield (0, exports.OSSApiFp)(this.sdkManager).uploadSignedResourcesChunk(accessToken, hash, contentRange, sessionId, body, contentType, contentDisposition, xAdsRegion, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`uploadSignedResourcesChunk Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`uploadSignedResourcesChunk Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.OssApiError(`uploadSignedResourcesChunk Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`uploadSignedResourcesChunk Request failed with no response received: ${error.request}`);
                    throw new base_1.OssApiError(`uploadSignedResourcesChunk Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.OSSApi = OSSApi;
/**
 * @export
 */
exports.CreateBucketXAdsRegionEnum = {
    Us: 'US',
    Emea: 'EMEA'
};
/**
 * @export
 */
exports.CreateSignedResourceAccessEnum = {
    Read: 'read',
    Write: 'write',
    Readwrite: 'readwrite'
};
/**
 * @export
 */
exports.DeleteSignedResourceRegionEnum = {
    Us: 'US',
    Emea: 'EMEA'
};
/**
 * @export
 */
exports.GetBucketsRegionEnum = {
    Us: 'US',
    Emea: 'EMEA'
};
/**
 * @export
 */
exports.GetObjectDetailsWithEnum = {
    CreatedDate: 'createdDate',
    LastAccessedDate: 'lastAccessedDate',
    LastModifiedDate: 'lastModifiedDate',
    UserDefinedMetadata: 'userDefinedMetadata'
};
/**
 * @export
 */
exports.GetSignedResourceRegionEnum = {
    Us: 'US',
    Emea: 'EMEA'
};
/**
 * @export
 */
exports.HeadObjectDetailsWithEnum = {
    CreatedDate: 'createdDate',
    LastAccessedDate: 'lastAccessedDate',
    LastModifiedDate: 'lastModifiedDate'
};
/**
 * @export
 */
exports.UploadSignedResourceXAdsRegionEnum = {
    Us: 'US',
    Emea: 'EMEA'
};
/**
 * @export
 */
exports.UploadSignedResourcesChunkXAdsRegionEnum = {
    Us: 'US',
    Emea: 'EMEA'
};
