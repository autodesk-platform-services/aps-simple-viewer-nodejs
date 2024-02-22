const { SdkManagerBuilder } = require('@aps_sdk/autodesk-sdkmanager');
const { AuthenticationClient, Scopes } = require('@aps_sdk/authentication');
const { OssClient, CreateBucketsPayloadPolicyKeyEnum, CreateBucketXAdsRegionEnum } = require('@aps_sdk/oss');
const { ModelDerivativeClient, View, Type } = require('@aps_sdk/model-derivative');
const { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET } = require('../config.js');

const sdk = SdkManagerBuilder.Create().build();
const authenticationClient = new AuthenticationClient(sdk);
const ossClient = new OssClient(sdk);
const modelDerivativeClient = new ModelDerivativeClient(sdk);

const service = module.exports = {};

service.getInternalToken = async () => {
    const credentials = await authenticationClient.getTwoLeggedTokenAsync(APS_CLIENT_ID, APS_CLIENT_SECRET, [
        Scopes.Dataread,
        Scopes.Datacreate,
        Scopes.Bucketcreate,
        Scopes.Bucketread
    ]);
    return credentials;
};

service.getPublicToken = async () => {
    const credentials = await authenticationClient.getTwoLeggedTokenAsync(APS_CLIENT_ID, APS_CLIENT_SECRET, [
        Scopes.Dataread
    ]);
    return credentials;
};

service.ensureBucketExists = async (bucketKey) => {
    const { access_token } = await service.getInternalToken();
    try {
        await ossClient.getBucketDetails(access_token, bucketKey);
    } catch (err) {
        if (err.axiosError.response.status === 404) {
            await ossClient.createBucket(access_token, CreateBucketXAdsRegionEnum.Us, {
                bucketKey: bucketKey,
                policyKey: CreateBucketsPayloadPolicyKeyEnum.Temporary
            });
        } else {
            throw err;  
        }
    }
};

service.listObjects = async () => {
    await service.ensureBucketExists(APS_BUCKET);
    const { access_token } = await service.getInternalToken();
    let resp = await ossClient.getObjects(access_token, APS_BUCKET, 64);
    let objects = resp.items;
    while (resp.next) {
        const startAt = new URL(resp.next).searchParams.get('startAt');
        resp = await ossClient.getObjects(access_token, APS_BUCKET, 64, startAt);
        objects = objects.concat(resp.items);
    }
    return objects;
};

service.uploadObject = async (objectName, filePath) => {
    await service.ensureBucketExists(APS_BUCKET);
    const { access_token } = await service.getInternalToken();
    const obj = await ossClient.Upload(APS_BUCKET, objectName, filePath, access_token);
    return obj;
};

service.translateObject = async (urn, rootFilename) => {
    const { access_token } = await service.getInternalToken();
    const job = await modelDerivativeClient.startJobAsync(access_token, {
        input: {
            urn: urn,
            compressedUrn: !!rootFilename,
            rootFilename: rootFilename
        },
        output: {
            formats: [{
                views: [View._2d, View._3d],
                type: Type.Svf
            }]
        }
    });
    return job.result;
};

service.getManifest = async (urn) => {
    const { access_token } = await service.getInternalToken();
    try {
        const manifest = await modelDerivativeClient.getManifestAsync(access_token, urn);
        return manifest;
    } catch (err) {
        if (err.axiosError.response.status === 404) {
            return null;
        } else {
            throw err;
        }
    }
};

service.urnify = (id) => Buffer.from(id).toString('base64').replace(/=/g, '');