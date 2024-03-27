
const { SdkManagerBuilder } = require('@aps_sdk/autodesk-sdkmanager');
const { ModelDerivativeClient, View, Type } = require('@aps_sdk/model-derivative');
const { OssClient, CreateBucketsPayloadPolicyKeyEnum, CreateBucketXAdsRegionEnum } = require('@aps_sdk/oss');
const { AuthenticationClient, Scopes } = require('@aps_sdk/authentication');
const { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET } = require('../config.js');

const sdkmanager = SdkManagerBuilder.create().build();
const ossclient = new OssClient(sdkmanager);
const modelDerivativeClient = new ModelDerivativeClient(sdkmanager);
const authenticationClient = new AuthenticationClient(sdkmanager);

const service = module.exports = {};

service.getInternalToken = async () => {
    const credentials = await authenticationClient.getTwoLeggedToken(APS_CLIENT_ID, APS_CLIENT_SECRET, [
        Scopes.DataRead,
        Scopes.DataCreate,
        Scopes.BucketCreate,
        Scopes.BucketRead
    ]);
    return credentials;
};

service.getPublicToken = async () => {
    const credentials = await authenticationClient.getTwoLeggedToken(APS_CLIENT_ID, APS_CLIENT_SECRET, [
        Scopes.DataRead
    ]);
    return credentials;
};

service.ensureBucketExists = async (bucketKey) => {
    try {
        const accessToken = (await service.getInternalToken()).access_token;
        await ossclient.getBucketDetails(accessToken, bucketKey);

    } catch (err) {
        if (err.response.status === 404) {
            await OssClient.createBucket(accessToken, CreateBucketXAdsRegionEnum.Us, {
                bucketKey: bucketKey,
                policyKey: CreateBucketsPayloadPolicyKeyEnum.Temporary
            })
        } else {
            throw err;
        }
    }
};

service.listObjects = async () => {
    await service.ensureBucketExists(APS_BUCKET);
    const accessToken = (await service.getInternalToken()).access_token;
    let resp = await ossclient.getObjects(accessToken, APS_BUCKET, 64);
    let objects = resp.items;
    while (resp.next) {
        const startAt = new URL(resp.next).searchParams.get('startAt');
        resp = await ossclient.getObjects(accessToken, APS_BUCKET, 64, startAt);
        objects = objects.concat(resp.items);
    }
    return objects;
};

service.uploadObject = async (objectName, filePath) => {
    await service.ensureBucketExists(APS_BUCKET);
    const accessToken = (await service.getInternalToken()).access_token;
    const obj = await ossclient.upload(APS_BUCKET, objectName, filePath, accessToken);
    return obj;
};

service.translateObject = async (urn, rootFilename) => {
    const svfOutputFormat = {
        views: [View._2d, View._3d],
        type: Type.Svf,
    };

    const jobPayload = {

        input: { urn: urn, compressedUrn: false, rootFilename: rootFilename },
        output: {
            formats: [svfOutputFormat],
        },
    };

    const accessToken = (await service.getInternalToken()).access_token;
    let job = await modelDerivativeClient.startJob(accessToken, jobPayload);
    let result = job.result;

    return result;
};

service.getManifest = async (urn) => {
    try {
        const accessToken = (await service.getInternalToken()).access_token;
        const resp = await modelDerivativeClient.getManifest(accessToken, urn)
        return resp;
    } catch (err) {
        if (err.response.status === 404) {
            return null;
        } else {
            throw err;
        }
    }
};

service.urnify = (id) => Buffer.from(id).toString('base64').replace(/=/g, '');
