import { SDKManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { CreateBucketXAdsRegionEnum, GetBucketsRegionEnum, OSSApi } from "../api";
import { OSSFileTransfer } from "./OSSFileTransfer";
import { CreateBucketsPayload } from "../model";
export declare class OssClient {
    ossApi: OSSApi;
    ossFileTransfer: OSSFileTransfer;
    constructor(sdkManager: SDKManager);
    /**
     * The below helper method takes care of the complete upload process, i.e.
     * the steps 2 to 4 in this link (https://aps.autodesk.com/en/docs/data/v2/tutorials/app-managed-bucket/)
     */
    Upload(bucketKey: string, filename: string, filepath: string, accessToken: string): Promise<ApiResponse>;
    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket.
     * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60;
     * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    createBucket(accessToken: string, xAdsRegion: CreateBucketXAdsRegionEnum, policyKey: CreateBucketsPayload): Promise<ApiResponse>;
    /**
   * Delete the bucket with the specified key
   * @param {string} bucketKey URL-encoded bucket key
   * @param accessToken bearer access token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OSSApiInterface
   */
    deleteBucket(accessToken: string, bucketKey: string): Promise<ApiResponse>;
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
    deleteObject(accessToken: string, bucketKey: string, objectKey: string): Promise<ApiResponse>;
    /**
     * This endpoint will return the details about the specified bucket.
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    getBucketDetails(accessToken: string, bucketKey: string): Promise<ApiResponse>;
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
    getBuckets(accessToken: string, region?: GetBucketsRegionEnum, limit?: number, startAt?: string): Promise<ApiResponse>;
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
    getObjectDetails(accessToken: string, bucketKey: string, objectKey: string): Promise<ApiResponse>;
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
    getObjects(accessToken: string, bucketKey: string, limit?: number, beginsWith?: string, startAt?: string): Promise<ApiResponse>;
}
