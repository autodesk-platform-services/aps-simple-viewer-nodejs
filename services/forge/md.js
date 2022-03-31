const { DerivativesApi } = require('forge-apis');
const { getInternalToken } = require('./auth.js');

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
    translateObject,
    getManifest,
    urnify
};
