const fs = require('fs');
const { BucketsApi, ObjectsApi } = require('forge-apis');
const { FORGE_BUCKET } = require('../../config.js');
const { getInternalToken } = require('./auth.js');

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
    const results = await new ObjectsApi().uploadResources(
        FORGE_BUCKET,
        [{ objectKey: objectName, data: buffer }],
        { useAcceleration: false, minutesExpiration: 15 },
        null,
        await getInternalToken()
    );
    if (results[0].error) {
        throw results[0].error;
    } else {
        return results[0].completed;
    }
}

module.exports = {
    listObjects,
    uploadObject
};
