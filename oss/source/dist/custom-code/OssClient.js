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
exports.OssClient = void 0;
const api_1 = require("../api");
const OSSFileTransfer_1 = require("./OSSFileTransfer");
const FileTransferConfigurations_1 = require("./FileTransferConfigurations");
const fs = require("fs");
class OssClient {
    constructor(sdkManager) {
        this.ossApi = new api_1.OSSApi(sdkManager);
        this.ossFileTransfer = new OSSFileTransfer_1.OSSFileTransfer(new FileTransferConfigurations_1.FileTransferConfigurations(3), sdkManager);
    }
    /**
     * The below helper method takes care of the complete upload process, i.e.
     * the steps 2 to 4 in this link (https://aps.autodesk.com/en/docs/data/v2/tutorials/app-managed-bucket/)
     */
    Upload(bucketKey, filename, filepath, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = fs.readFileSync(filepath);
            const response = yield this.ossFileTransfer.Upload(bucketKey, filename, buffer, accessToken, new AbortController);
            return response;
        });
    }
    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket.
     * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60;
     * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    createBucket(accessToken, xAdsRegion, policyKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ossApi.createBucket(accessToken, xAdsRegion, policyKey);
            return response;
        });
    }
    /**
   * Delete the bucket with the specified key
   * @param {string} bucketKey URL-encoded bucket key
   * @param accessToken bearer access token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OSSApiInterface
   */
    deleteBucket(accessToken, bucketKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ossApi.deleteBucket(accessToken, bucketKey);
            return response;
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
  * @memberof OSSApiInterface
  */
    deleteObject(accessToken, bucketKey, objectKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ossApi.deleteObject(accessToken, bucketKey, objectKey);
            return response;
        });
    }
    /**
     * This endpoint will return the details about the specified bucket.
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    getBucketDetails(accessToken, bucketKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ossApi.getBucketDetails(accessToken, bucketKey);
            return response;
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
        * @memberof OSSApiInterface
        */
    getBuckets(accessToken, region, limit, startAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ossApi.getBuckets(accessToken, region, limit, startAt);
            return response;
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
        * @memberof OSSApiInterface
        */
    getObjectDetails(accessToken, bucketKey, objectKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ossApi.getObjectDetails(accessToken, bucketKey, objectKey);
            return response;
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
     * @memberof OSSApiInterface
     */
    getObjects(accessToken, bucketKey, limit, beginsWith, startAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ossApi.getObjects(accessToken, bucketKey, limit, beginsWith, startAt);
            return response;
        });
    }
}
exports.OssClient = OssClient;
