const APS = require('forge-apis');
const { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET } = require('../config.js');

let internalAuthClient = new APS.AuthClientTwoLegged(APS_CLIENT_ID, APS_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);
let publicAuthClient = new APS.AuthClientTwoLegged(APS_CLIENT_ID, APS_CLIENT_SECRET, ['viewables:read'], true);

const service = module.exports = {};

service.getInternalToken = async () => {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
};

service.getPublicToken = async () => {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
};

service.ensureBucketExists = async (bucketKey) => {
    try {
        await new APS.BucketsApi().getBucketDetails(bucketKey, null, await service.getInternalToken());
    } catch (err) {
        if (err.response.status === 404) {
            await new APS.BucketsApi().createBucket({ bucketKey, policyKey: 'temporary' }, {}, null, await service.getInternalToken());
        } else {
            throw err;
        }
    }
};

service.listObjects = async () => {
    await service.ensureBucketExists(APS_BUCKET);
    let resp = await new APS.ObjectsApi().getObjects(APS_BUCKET, { limit: 64 }, null, await service.getInternalToken());
    let objects = resp.body.items;
    while (resp.body.next) {
        const startAt = new URL(resp.body.next).searchParams.get('startAt');
        resp = await new APS.ObjectsApi().getObjects(APS_BUCKET, { limit: 64, startAt }, null, await service.getInternalToken());
        objects = objects.concat(resp.body.items);
    }
    return objects;
};

service.getUploadUrl = async (objectName) => {
    await service.ensureBucketExists(APS_BUCKET);
    const resp = await new APS.ObjectsApi().createSignedResource(
        APS_BUCKET,
        objectName,
        { minutesExpiration: 15 },
        { access: 'readwrite' },
        null,
        await service.getInternalToken()
    );
    return resp.body;
};

service.translateObject = async (urn, rootFilename) => {
    const job = {
        input: { urn },
        output: { formats: [{ type: 'svf', views: ['2d', '3d'] }] }
    };
    if (rootFilename) {
        job.input.compressedUrn = true;
        job.input.rootFilename = rootFilename;
    }
    const resp = await new APS.DerivativesApi().translate(job, {}, null, await service.getInternalToken());
    return resp.body;
};

service.getManifest = async (urn) => {
    try {
        const resp = await new APS.DerivativesApi().getManifest(urn, {}, null, await service.getInternalToken());
        return resp.body;
    } catch (err) {
        if (err.response.status === 404) {
            return null;
        } else {
            throw err;
        }
    }
};

service.urnify = (id) => Buffer.from(id).toString('base64').replace(/=/g, '');
