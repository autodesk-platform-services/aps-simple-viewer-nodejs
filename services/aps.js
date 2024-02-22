const { SdkManagerBuilder } = require('@aps_sdk/autodesk-sdkmanager');
const { ModelDerivativeClient, View, Type } = require('@aps_sdk/model-derivative');
const { AuthenticationClient, Scopes } = require('@aps_sdk/authentication');
const { OssClient, CreateBucketsPayloadPolicyKeyEnum, CreateBucketXAdsRegionEnum } = require('@aps_sdk/oss');

const { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET } = require('../config.js');

const sdkmanager = SdkManagerBuilder.Create().build();
const authenticationClient = new AuthenticationClient(sdkmanager);
const ossClient = new OssClient(sdkmanager);
const modelDerivativeClient = new ModelDerivativeClient(sdkmanager);

const service = (module.exports = {});

service.getInternalToken = async () => {
  const token = await authenticationClient.getTwoLeggedTokenAsync(
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    new Array(
      Scopes.Dataread,
      Scopes.Datacreate,
      Scopes.Bucketcreate,
      Scopes.Bucketread
    )
  );
  return token;
};

service.getPublicToken = async () => {
  const token = await authenticationClient.getTwoLeggedTokenAsync(
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    new Array(Scopes.Viewablesread)
  );
  return token;
};

service.ensureBucketExists = async (bucketKey) => {
  const { access_token } = await service.getInternalToken();

  try {
    await ossClient.getBucketDetails(access_token, bucketKey);
  } catch (err) {
    if (err.axiosError.response.status === 404) {
      const bucketPayload = {
        bucketKey: bucketKey,
        policyKey: CreateBucketsPayloadPolicyKeyEnum.Persistent,
      };

      await ossClient.createBucket(
        access_token,
        CreateBucketXAdsRegionEnum.Emea,
        bucketPayload
      );
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
    const startAt = new URL(resp.next).searchParams.get("startAt");
    resp = await ossClient.getObjects(access_token, APS_BUCKET, 64, startAt);
    objects = objects.concat(resp.items);
  }
  return objects;
};

service.uploadObject = async (objectName, filePath) => {
  await service.ensureBucketExists(APS_BUCKET);
  const { access_token } = await service.getInternalToken();

  const results = await ossClient.Upload(
    APS_BUCKET,
    objectName,
    filePath,
    access_token
  );
  return results;
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

  const { access_token } = await service.getInternalToken();

  let job = await modelDerivativeClient.startJobAsync(access_token, jobPayload);
  let result = job.result;

  return result;
};

service.getManifest = async (urn) => {
  try {
    const { access_token } = await service.getInternalToken();

    const resp = await modelDerivativeClient.getManifestAsync(
      access_token,
      urn
    );
    return resp;
  } catch (err) {
    console.log(err.message);
    if (err.axiosError.response.status === 404) {
      return null;
    } else {
      throw err;
    }
  }
};

service.urnify = (id) => Buffer.from(id).toString("base64").replace(/=/g, "");
