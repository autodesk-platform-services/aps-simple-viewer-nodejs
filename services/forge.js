const { AuthClientTwoLegged, BucketsApi, ObjectsApi, DerivativesApi } = require('forge-apis');

const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = process.env;
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
const BUCKET = FORGE_BUCKET || `${FORGE_CLIENT_ID.toLowerCase()}-basic-app`;
const INTERNAL_TOKEN_SCOPES = ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'];
const PUBLIC_TOKEN_SCOPES = ['viewables:read'];

let _tokenCache = new Map();

async function _getAccessToken(scopes) {
    const key = scopes.join(',');
    let token = _tokenCache.get(key);
    if (!token || token.expires_at < Date.now()) {
        const client = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, scopes);
        token = await client.authenticate();
        token.expires_at = Date.now() + token.expires_in * 1000;
        _tokenCache.set(key, token);
    }
    return {
        access_token: token.access_token,
        // token_type: token.token_type,
        expires_in: Math.round((token.expires_at - Date.now()) / 1000)
    };
}

function _urnify(id) {
    return Buffer.from(id).toString('base64').replace(/=/g, '');
}

async function getPublicToken() {
    return _getAccessToken(PUBLIC_TOKEN_SCOPES);
}

async function listModels() {
    const token = await _getAccessToken(INTERNAL_TOKEN_SCOPES);
    let response = await new ObjectsApi().getObjects(BUCKET, { limit: 64 }, null, token);
    let objects = response.body.items;
    while (response.body.next) {
        const startAt = new URL(response.body.next).searchParams.get('startAt');
        response = await new ObjectsApi().getObjects(BUCKET, { limit: 64, startAt }, null, token);
        objects = objects.concat(response.body.items);
    }
    return objects.map(obj => ({
        name: obj.objectKey,
        urn: _urnify(obj.objectId)
    }));
}

async function ensureBucketExists() {
    const token = await _getAccessToken(INTERNAL_TOKEN_SCOPES);
    try {
        await new BucketsApi().getBucketDetails(BUCKET, null, token);
    } catch (err) {
        if (err.statusCode === 404) {
            await new BucketsApi().createBucket({ bucketKey: BUCKET, policyKey: 'temporary' }, {}, null, token);
        } else {
            throw err;
        }
    }
}

async function uploadModel(objectName, buffer, rootFilename) {
    const token = await _getAccessToken(INTERNAL_TOKEN_SCOPES);
    const response = await new ObjectsApi().uploadObject(BUCKET, objectName, buffer.byteLength, buffer, {}, null, token);
    const job = {
        input: {
            urn: _urnify(response.body.objectId)
        },
        output: {
            formats: [{ type: 'svf', views: ['2d', '3d'] }]
        }
    };
    if (rootFilename) {
        job.input.compressedUrn = true;
        job.input.rootFilename = rootFilename;
    }
    await new DerivativesApi().translate(job, {}, null, token);
}

module.exports = {
    getPublicToken,
    listModels,
    ensureBucketExists,
    uploadModel
};
