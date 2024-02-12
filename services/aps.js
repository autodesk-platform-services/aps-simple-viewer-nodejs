const autodesk_sdkmanager = require("@aps_sdk/autodesk-sdkmanager");

// all theses lines will be gone after publishing to npm
const authentication = require('../authentication/source/dist/custom-code/AuthenticationClient.js');
const oss = require('../oss/source/dist/custom-code/OssClient.js');
const modelDerivative = require('../model-derivative/dist/custom-code/ModelDerivativeClient.js');
const policyKey = require('../oss/source/dist/model/create-buckets-payload.js');
const scopes = require('../authentication/source/dist/model/scopes.js');
const views = require('../model-derivative/dist/model/view.js');
const type = require('../model-derivative/dist/model/type.js');

const {
  APS_CLIENT_ID,
  APS_CLIENT_SECRET,
  APS_BUCKET,
} = require('../config.js');

const sdkmanager = autodesk_sdkmanager.SdkManagerBuilder.Create().build();
const authenticationClient = new authentication.AuthenticationClient(
  sdkmanager
);
const ossClient = new oss.OssClient(sdkmanager);
const modelDerivativeClient = new modelDerivative.ModelDerivativeClient(
  sdkmanager
);

const service = (module.exports = {});

service.getInternalToken = async () => {
  const token = await authenticationClient.getTwoLeggedTokenAsync(
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    new Array(
      scopes.Scopes.Dataread,
      scopes.Scopes.Datacreate,
      scopes.Scopes.Bucketcreate,
      scopes.Scopes.Bucketread
    )
  );
  return token;
};

service.getPublicToken = async () => {
  const token = await authenticationClient.getTwoLeggedTokenAsync(
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    new Array(scopes.Scopes.Viewablesread)
  );
  return token;
};

service.ensureBucketExists = async (bucketKey) => {
  const { access_token } = await service.getInternalToken();

  try {
    await ossClient.getBucketDetails(access_token, bucketKey);
  } catch (err) {
    if (
      err.message ===
      'getBucketDetails Request failed with status : 404 and error message: Bucket not found'
    ) {

      const bucketPayload = {
        bucketKey: bucketKey,
        policyKey: policyKey.CreateBucketsPayloadPolicyKeyEnum.Persistent,

      };

      await ossClient.createBucket(
        accessToken,
        bucketPayload
      );
    } else {
      throw err;
    }
  }
};

service.listObjects = async () => {
  await service.ensureBucketExists(APS_BUCKET);
  const response = await service.getInternalToken();
  const accessToken = response.access_token;
  let resp = await ossClient.getObjects(accessToken, APS_BUCKET, 64);
  let objects = resp.response.data.items;

  while (resp.response.data.next) {
    const startAt = new URL(resp.response.data.next).searchParams.get(
      'startAt'
    );
    resp = await ossClient.getObjects(accessToken, APS_BUCKET, 64, startAt);
    objects = objects.concat(resp.response.data.items);
  }
  return objects;
};

service.uploadObject = async (objectName, filePath) => {
  await service.ensureBucketExists(APS_BUCKET);

  const response = await service.getInternalToken();
  const accessToken = response.access_token;

  const results = await ossClient.Upload(
    APS_BUCKET,
    objectName,
    filePath,
    accessToken
  );

  console.log(results.content);
  return results.content;
};

service.translateObject = async (urn, rootFilename) => {
  const svfOutputFormat = {
    views: [views.View._2d, views.View._3d],
    type: type.Type.Svf,
  };

  const jobPayload = {
    input: { urn: urn, compressedUrn: false, rootFilename: rootFilename },
    output: {
      formats: [svfOutputFormat],
    },
  };

  const response = await service.getInternalToken();
  const accessToken = response.access_token;

  let job = await modelDerivativeClient.startJobAsync(accessToken, jobPayload);
  let result = job.result;

  return result;
};

service.getManifest = async (urn) => {
  try {
    const response = await service.getInternalToken();
    const accessToken = response.access_token;

    const resp = await modelDerivativeClient.getManifestAsync(
      accessToken,
      urn
    );
    return resp;
  } catch (err) {
    console.log(err.message);
    if (
      err.message ===
      'getManifest Request failed with status : 404 and error mssage: undefined'
    ) {
      return null;
    } else {
      throw err;
    }
  }
};

service.urnify = (id) => Buffer.from(id).toString('base64').replace(/=/g, '');
