const fs = require('fs');
const { AuthClientTwoLegged, BucketsApi, ObjectsApi, DerivativesApi } = require('forge-apis');
const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = require('../config.js');

let internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);
let publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);

async function getInternalToken() {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
}

async function getPublicToken() {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
}

async function ensureBucketExists(bucketKey) {
    try {
        await new BucketsApi().getBucketDetails(bucketKey, null, await getInternalToken());
    } catch (err) {
        if (err.statusCode === 404) {
            await new BucketsApi().createBucket({ bucketKey, policyKey: 'temporary' }, {}, null, await getInternalToken());
        } else {
            throw err;
        }
    }
}

async function listObjects() {
    await ensureBucketExists(FORGE_BUCKET);
    let resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64 }, null, await getInternalToken());
    let objects = resp.body.items;
    while (resp.body.next) {
        const startAt = new URL(resp.body.next).searchParams.get('startAt');
        resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64, startAt }, null, await getInternalToken());
        objects = objects.concat(resp.body.items);
    }
    return objects;
}

async function uploadObject(objectName, filePath) {
    await ensureBucketExists(FORGE_BUCKET);
    const buffer = fs.readFileSync(filePath);
    const resp = await new ObjectsApi().uploadObject(FORGE_BUCKET, objectName, buffer.byteLength, buffer, {}, null, await getInternalToken());
    return resp.body;
}

async function translateObject(urn, rootFilename) {
    const job = {
        input: { urn },
        output: { formats: [{ type: 'svf', views: ['2d', '3d'] }] }
    };
    if (rootFilename) {
        job.input.compressedUrn = true;
        job.input.rootFilename = rootFilename;
    }
    const resp = await new DerivativesApi().translate(job, {}, null, await getInternalToken());
    return resp.body;
}

async function getManifest(urn) {
    try {
        const resp = await new DerivativesApi().getManifest(urn, {}, null, await getInternalToken());
        return resp.body;
    } catch (err) {
        if (err.statusCode === 404) {
            return null;
        } else {
            throw err;
        }
    }
}

function urnify(id) {
    return Buffer.from(id).toString('base64').replace(/=/g, '');
}

module.exports = {
    getPublicToken,
    listObjects,
    uploadObject,
    translateObject,
    getManifest,
    urnify
};
