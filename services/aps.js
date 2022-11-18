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

service.urnify = (id) => Buffer.from(id).toString('base64').replace(/=/g, '');
