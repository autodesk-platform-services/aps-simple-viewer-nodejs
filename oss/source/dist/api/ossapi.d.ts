import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { BatchcompleteuploadObject } from '../model';
import { BatchcompleteuploadResponse } from '../model';
import { Batchsigneds3downloadObject } from '../model';
import { Batchsigneds3downloadResponse } from '../model';
import { Batchsigneds3uploadObject } from '../model';
import { Batchsigneds3uploadResponse } from '../model';
import { Bucket } from '../model';
import { BucketObjects } from '../model';
import { Buckets } from '../model';
import { Completes3uploadBody } from '../model';
import { CreateBucketsPayload } from '../model';
import { CreateObjectSigned } from '../model';
import { CreateSignedResource } from '../model';
import { ObjectDetails } from '../model';
import { ObjectFullDetails } from '../model';
import { Signeds3downloadResponse } from '../model';
import { Signeds3uploadResponse } from '../model';
/**
 * OSSApi - axios parameter creator
 * @export
 */
export declare const OSSApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchCompleteUpload: (accessToken: string, bucketKey: string, requests?: BatchcompleteuploadObject, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    batchSignedS3Download: (accessToken: string, bucketKey: string, requests: Batchsigneds3downloadObject, publicResourceFallback?: boolean, minutesExpiration?: number, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    batchSignedS3Upload: (accessToken: string, bucketKey: string, useAcceleration?: boolean, minutesExpiration?: number, requests?: Batchsigneds3uploadObject, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    completeSignedS3Upload: (accessToken: string, bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    copyTo: (accessToken: string, bucketKey: string, objectKey: string, newObjName: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket.
     * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60;
     * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBucket: (accessToken: string, xAdsRegion: CreateBucketXAdsRegionEnum, policyKey: CreateBucketsPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    createSignedResource: (accessToken: string, bucketKey: string, objectKey: string, access?: CreateSignedResourceAccessEnum, useCdn?: boolean, createSignedResource?: CreateSignedResource, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Delete the bucket with the specified key
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBucket: (accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    deleteObject: (accessToken: string, bucketKey: string, objectKey: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
     * @param {string} hash Hash of signed resource
     * @param {DeleteSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSignedResource: (accessToken: string, hash: string, region?: DeleteSignedResourceRegionEnum, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * This endpoint will return the details about the specified bucket.
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBucketDetails: (accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * This endpoint will return the buckets owned by the application. This endpoint supports pagination.
     * @param {GetBucketsRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
     * @param {string} [startAt] Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuckets: (accessToken: string, region?: GetBucketsRegionEnum, limit?: number, startAt?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getObjectDetails: (accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: GetObjectDetailsWithEnum, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getObjects: (accessToken: string, bucketKey: string, limit?: number, beginsWith?: string, startAt?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getSignedResource: (accessToken: string, hash: string, range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: GetSignedResourceRegionEnum, responseContentDisposition?: string, responseContentType?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    headObjectDetails: (accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: HeadObjectDetailsWithEnum, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    postUpload: (accessToken: string, bucketKey: string, contentLength: number, xAdsObjectName: string, xAdsObjectSize: number, contentType?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, xAdsMetaCacheControl?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    signedS3Download: (accessToken: string, bucketKey: string, objectKey: string, ifNoneMatch?: string, ifModifiedSince?: string, xAdsAcmScopes?: string, responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean, redirect?: boolean, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    signedS3Upload: (accessToken: string, bucketKey: string, objectKey: string, xAdsAcmScopes?: string, parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    uploadSignedResource: (accessToken: string, hash: string, contentLength: number, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: UploadSignedResourceXAdsRegionEnum, ifMatch?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    uploadSignedResourcesChunk: (accessToken: string, hash: string, contentRange: string, sessionId: string, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: UploadSignedResourcesChunkXAdsRegionEnum, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * OSSApi - functional programming interface
 * @export
 */
export declare const OSSApiFp: (sdkManager?: SDKManager) => {
    /**
     * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchCompleteUpload(accessToken: string, bucketKey: string, requests?: BatchcompleteuploadObject, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BatchcompleteuploadResponse>>;
    /**
     * Gets one or more signed URLs to download objects. The signed URLs can be used to download the objects directly from S3, skipping OSS servers. Be aware that expiration time for the signed URL(s) is just 60 seconds. So, a request to the URL(s) must begin within 60 seconds; the transfer of the data can exceed 60 seconds. A successful call to this endpoint requires bucket owner access.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
     * @param {boolean} [publicResourceFallback] Indicates that for each requested object, OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchSignedS3Download(accessToken: string, bucketKey: string, requests: Batchsigneds3downloadObject, publicResourceFallback?: boolean, minutesExpiration?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Batchsigneds3downloadResponse>>;
    /**
     * Requests a batch of S3 signed URL with which to upload multiple objects or chunks of multiple objects. As with the Batch Get Download URL endpoint, the requests within the batch are evaluated independently and individual requests can be rejected even if the overall request returns a 200 response code. You can request a maximum of 25 URLs in a single request.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {boolean} [useAcceleration] Whether or not to generate an accelerated signed URL (ie: URLs of the form ...s3-accelerate.amazonaws.com... vs ...s3.amazonaws.com...). When not specified, defaults to true. Providing non-boolean values will result in a 400 error.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param {Batchsigneds3uploadObject} [requests] An array of objects, each of which represents a signed URL / URLs to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchSignedS3Upload(accessToken: string, bucketKey: string, useAcceleration?: boolean, minutesExpiration?: number, requests?: Batchsigneds3uploadObject, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Batchsigneds3uploadResponse>>;
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
    completeSignedS3Upload(accessToken: string, bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    copyTo(accessToken: string, bucketKey: string, objectKey: string, newObjName: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectDetails>>;
    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket.
     * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60;
     * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBucket(accessToken: string, xAdsRegion: CreateBucketXAdsRegionEnum, policyKey: CreateBucketsPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Bucket>>;
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
    createSignedResource(accessToken: string, bucketKey: string, objectKey: string, access?: CreateSignedResourceAccessEnum, useCdn?: boolean, createSignedResource?: CreateSignedResource, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateObjectSigned>>;
    /**
     * Delete the bucket with the specified key
     * @param {string} bucketKey URL-encoded bucket key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBucket(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    deleteObject(accessToken: string, bucketKey: string, objectKey: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
     * @param {string} hash Hash of signed resource
     * @param {DeleteSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSignedResource(accessToken: string, hash: string, region?: DeleteSignedResourceRegionEnum, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * This endpoint will return the details about the specified bucket.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBucketDetails(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Bucket>>;
    /**
     * This endpoint will return the buckets owned by the application. This endpoint supports pagination.
     * @param {GetBucketsRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
     * @param {string} [startAt] Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuckets(accessToken: string, region?: GetBucketsRegionEnum, limit?: number, startAt?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Buckets>>;
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
    getObjectDetails(accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: GetObjectDetailsWithEnum, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectFullDetails>>;
    /**
     * List objects in a bucket. It is only available to the bucket creator.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
     * @param {string} [beginsWith] Provides a way to filter the based on object key name
     * @param {string} [startAt] Key to use as an offset to continue pagination. This is typically the last bucket key found in a preceding GET buckets response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getObjects(accessToken: string, bucketKey: string, limit?: number, beginsWith?: string, startAt?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BucketObjects>>;
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
    getSignedResource(accessToken: string, hash: string, range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: GetSignedResourceRegionEnum, responseContentDisposition?: string, responseContentType?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>>;
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
    headObjectDetails(accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: HeadObjectDetailsWithEnum, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    postUpload(accessToken: string, bucketKey: string, contentLength: number, xAdsObjectName: string, xAdsObjectSize: number, contentType?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, xAdsMetaCacheControl?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    signedS3Download(accessToken: string, bucketKey: string, objectKey: string, ifNoneMatch?: string, ifModifiedSince?: string, xAdsAcmScopes?: string, responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean, redirect?: boolean, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signeds3downloadResponse>>;
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
    signedS3Upload(accessToken: string, bucketKey: string, objectKey: string, xAdsAcmScopes?: string, parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signeds3uploadResponse>>;
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
    uploadSignedResource(accessToken: string, hash: string, contentLength: number, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: UploadSignedResourceXAdsRegionEnum, ifMatch?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectDetails>>;
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
    uploadSignedResourcesChunk(accessToken: string, hash: string, contentRange: string, sessionId: string, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: UploadSignedResourcesChunkXAdsRegionEnum, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectDetails>>;
};
/**
 * OSSApi - interface
 * @export
 * @interface OSSApi
 */
export interface OSSApiInterface {
    /**
     * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    batchCompleteUpload(accessToken: string, bucketKey: string, requests?: BatchcompleteuploadObject, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Gets one or more signed URLs to download objects. The signed URLs can be used to download the objects directly from S3, skipping OSS servers. Be aware that expiration time for the signed URL(s) is just 60 seconds. So, a request to the URL(s) must begin within 60 seconds; the transfer of the data can exceed 60 seconds. A successful call to this endpoint requires bucket owner access.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
     * @param {boolean} [publicResourceFallback] Indicates that for each requested object, OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    batchSignedS3Download(accessToken: string, bucketKey: string, requests: Batchsigneds3downloadObject, publicResourceFallback?: boolean, minutesExpiration?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Requests a batch of S3 signed URL with which to upload multiple objects or chunks of multiple objects. As with the Batch Get Download URL endpoint, the requests within the batch are evaluated independently and individual requests can be rejected even if the overall request returns a 200 response code. You can request a maximum of 25 URLs in a single request.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {boolean} [useAcceleration] Whether or not to generate an accelerated signed URL (ie: URLs of the form ...s3-accelerate.amazonaws.com... vs ...s3.amazonaws.com...). When not specified, defaults to true. Providing non-boolean values will result in a 400 error.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param {Batchsigneds3uploadObject} [requests] An array of objects, each of which represents a signed URL / URLs to retrieve.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    batchSignedS3Upload(accessToken: string, bucketKey: string, useAcceleration?: boolean, minutesExpiration?: number, requests?: Batchsigneds3uploadObject, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    completeSignedS3Upload(accessToken: string, bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    copyTo(accessToken: string, bucketKey: string, objectKey: string, newObjName: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket.
     * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60;
     * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    createBucket(accessToken: string, xAdsRegion: CreateBucketXAdsRegionEnum, policyKey: CreateBucketsPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    createSignedResource(accessToken: string, bucketKey: string, objectKey: string, access?: CreateSignedResourceAccessEnum, useCdn?: boolean, createSignedResource?: CreateSignedResource, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Delete the bucket with the specified key
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    deleteBucket(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    deleteObject(accessToken: string, bucketKey: string, objectKey: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
     * @param {string} hash Hash of signed resource
     * @param {DeleteSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    deleteSignedResource(accessToken: string, hash: string, region?: DeleteSignedResourceRegionEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * This endpoint will return the details about the specified bucket.
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    getBucketDetails(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * This endpoint will return the buckets owned by the application. This endpoint supports pagination.
     * @param {GetBucketsRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
     * @param {string} [startAt] Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    getBuckets(accessToken: string, region?: GetBucketsRegionEnum, limit?: number, startAt?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    getObjectDetails(accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: GetObjectDetailsWithEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * List objects in a bucket. It is only available to the bucket creator.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10
     * @param {string} [beginsWith] Provides a way to filter the based on object key name
     * @param {string} [startAt] Key to use as an offset to continue pagination. This is typically the last bucket key found in a preceding GET buckets response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    getObjects(accessToken: string, bucketKey: string, limit?: number, beginsWith?: string, startAt?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    getSignedResource(accessToken: string, hash: string, range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: GetSignedResourceRegionEnum, responseContentDisposition?: string, responseContentType?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    headObjectDetails(accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: HeadObjectDetailsWithEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    postUpload(accessToken: string, bucketKey: string, contentLength: number, xAdsObjectName: string, xAdsObjectSize: number, contentType?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, xAdsMetaCacheControl?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    signedS3Download(accessToken: string, bucketKey: string, objectKey: string, ifNoneMatch?: string, ifModifiedSince?: string, xAdsAcmScopes?: string, responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean, redirect?: boolean, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    signedS3Upload(accessToken: string, bucketKey: string, objectKey: string, xAdsAcmScopes?: string, parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    uploadSignedResource(accessToken: string, hash: string, contentLength: number, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: UploadSignedResourceXAdsRegionEnum, ifMatch?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof OSSApiInterface
     */
    uploadSignedResourcesChunk(accessToken: string, hash: string, contentRange: string, sessionId: string, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: UploadSignedResourcesChunkXAdsRegionEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * OSSApi - object-oriented interface
 * @export
 * @class OSSApi
 * @extends {BaseAPI}
 */
export declare class OSSApi extends BaseAPI implements OSSApiInterface {
    private logger;
    /**
     * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    batchCompleteUpload(accessToken: string, bucketKey: string, requests?: BatchcompleteuploadObject, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    batchSignedS3Download(accessToken: string, bucketKey: string, requests: Batchsigneds3downloadObject, publicResourceFallback?: boolean, minutesExpiration?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    batchSignedS3Upload(accessToken: string, bucketKey: string, useAcceleration?: boolean, minutesExpiration?: number, requests?: Batchsigneds3uploadObject, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    completeSignedS3Upload(accessToken: string, bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    copyTo(accessToken: string, bucketKey: string, objectKey: string, newObjName: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket.
     * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60;
     * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    createBucket(accessToken: string, xAdsRegion: CreateBucketXAdsRegionEnum, policyKey: CreateBucketsPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    createSignedResource(accessToken: string, bucketKey: string, objectKey: string, access?: CreateSignedResourceAccessEnum, useCdn?: boolean, createSignedResource?: CreateSignedResource, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Delete the bucket with the specified key
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    deleteBucket(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    deleteObject(accessToken: string, bucketKey: string, objectKey: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
     * @param {string} hash Hash of signed resource
     * @param {DeleteSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    deleteSignedResource(accessToken: string, hash: string, region?: DeleteSignedResourceRegionEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * This endpoint will return the details about the specified bucket.
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    getBucketDetails(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getBuckets(accessToken: string, region?: GetBucketsRegionEnum, limit?: number, startAt?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getObjectDetails(accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: GetObjectDetailsWithEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getObjects(accessToken: string, bucketKey: string, limit?: number, beginsWith?: string, startAt?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getSignedResource(accessToken: string, hash: string, range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: GetSignedResourceRegionEnum, responseContentDisposition?: string, responseContentType?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    headObjectDetails(accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: HeadObjectDetailsWithEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    postUpload(accessToken: string, bucketKey: string, contentLength: number, xAdsObjectName: string, xAdsObjectSize: number, contentType?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, xAdsMetaCacheControl?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    signedS3Download(accessToken: string, bucketKey: string, objectKey: string, ifNoneMatch?: string, ifModifiedSince?: string, xAdsAcmScopes?: string, responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean, redirect?: boolean, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    signedS3Upload(accessToken: string, bucketKey: string, objectKey: string, xAdsAcmScopes?: string, parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    uploadSignedResource(accessToken: string, hash: string, contentLength: number, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: UploadSignedResourceXAdsRegionEnum, ifMatch?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    uploadSignedResourcesChunk(accessToken: string, hash: string, contentRange: string, sessionId: string, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: UploadSignedResourcesChunkXAdsRegionEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * @export
 */
export declare const CreateBucketXAdsRegionEnum: {
    readonly Us: "US";
    readonly Emea: "EMEA";
};
export type CreateBucketXAdsRegionEnum = typeof CreateBucketXAdsRegionEnum[keyof typeof CreateBucketXAdsRegionEnum];
/**
 * @export
 */
export declare const CreateSignedResourceAccessEnum: {
    readonly Read: "read";
    readonly Write: "write";
    readonly Readwrite: "readwrite";
};
export type CreateSignedResourceAccessEnum = typeof CreateSignedResourceAccessEnum[keyof typeof CreateSignedResourceAccessEnum];
/**
 * @export
 */
export declare const DeleteSignedResourceRegionEnum: {
    readonly Us: "US";
    readonly Emea: "EMEA";
};
export type DeleteSignedResourceRegionEnum = typeof DeleteSignedResourceRegionEnum[keyof typeof DeleteSignedResourceRegionEnum];
/**
 * @export
 */
export declare const GetBucketsRegionEnum: {
    readonly Us: "US";
    readonly Emea: "EMEA";
};
export type GetBucketsRegionEnum = typeof GetBucketsRegionEnum[keyof typeof GetBucketsRegionEnum];
/**
 * @export
 */
export declare const GetObjectDetailsWithEnum: {
    readonly CreatedDate: "createdDate";
    readonly LastAccessedDate: "lastAccessedDate";
    readonly LastModifiedDate: "lastModifiedDate";
    readonly UserDefinedMetadata: "userDefinedMetadata";
};
export type GetObjectDetailsWithEnum = typeof GetObjectDetailsWithEnum[keyof typeof GetObjectDetailsWithEnum];
/**
 * @export
 */
export declare const GetSignedResourceRegionEnum: {
    readonly Us: "US";
    readonly Emea: "EMEA";
};
export type GetSignedResourceRegionEnum = typeof GetSignedResourceRegionEnum[keyof typeof GetSignedResourceRegionEnum];
/**
 * @export
 */
export declare const HeadObjectDetailsWithEnum: {
    readonly CreatedDate: "createdDate";
    readonly LastAccessedDate: "lastAccessedDate";
    readonly LastModifiedDate: "lastModifiedDate";
};
export type HeadObjectDetailsWithEnum = typeof HeadObjectDetailsWithEnum[keyof typeof HeadObjectDetailsWithEnum];
/**
 * @export
 */
export declare const UploadSignedResourceXAdsRegionEnum: {
    readonly Us: "US";
    readonly Emea: "EMEA";
};
export type UploadSignedResourceXAdsRegionEnum = typeof UploadSignedResourceXAdsRegionEnum[keyof typeof UploadSignedResourceXAdsRegionEnum];
/**
 * @export
 */
export declare const UploadSignedResourcesChunkXAdsRegionEnum: {
    readonly Us: "US";
    readonly Emea: "EMEA";
};
export type UploadSignedResourcesChunkXAdsRegionEnum = typeof UploadSignedResourcesChunkXAdsRegionEnum[keyof typeof UploadSignedResourcesChunkXAdsRegionEnum];
