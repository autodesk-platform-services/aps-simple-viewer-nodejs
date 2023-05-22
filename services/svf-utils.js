const path = require('path');
const Zip = require('adm-zip');
const axios = require('axios').default;
const APS = require('forge-apis');

/**
 * Collects URNs of all assets that make up an SVF output for given model URN.
 * @param {string} urn Model URN.
 * @param {object} credentials Credentials for accessing the Model Derivative service.
 * @returns {string[]} List of URNs of all SVF assets.
 */
async function findModelAssets(urn, credentials) {
    const urns = [];
    const manifest = await getManifest(urn, credentials);
    // TODO: check whether the model is successfully translated, and whether it's SVF1 or F2D
    for (const resource of findManifestResources(manifest)) {
        urns.push(resource.urn);
        switch (resource.mime) {
            case 'application/autodesk-svf':
                const svfAssetPaths = await getSvfAssets(urn, resource.urn, credentials.access_token);
                for (const assetPath of svfAssetPaths) {
                    urns.push(resolveAssetPath(resource.urn, assetPath));
                }
                break;
            case 'application/autodesk-f2d':
                const f2dAssetPaths = await getF2dAssets(urn, resource.urn, credentials.access_token);
                for (const assetPath of f2dAssetPaths) {
                    urns.push(resolveAssetPath(resource.urn, assetPath));
                }
                break;
            default:
        }
    }
    return urns;
}

function findManifestResources(manifest) {
    let resources = [];
    function crawl(node) {
        if (node?.type === 'resource' && node.urn) {
            resources.push(node);
        }
        if (node?.children) {
            node.children.forEach(crawl);
        }
    }
    for (const derivative of manifest.derivatives) {
        crawl(derivative);
    }
    return resources;
}

function resolveAssetPath(resourceUrn, assetPath) {
    const urnSegment = resourceUrn.slice(0, resourceUrn.indexOf('/'));
    const pathSegment = resourceUrn.slice(resourceUrn.indexOf('/'));
    return urnSegment + path.resolve(path.dirname(pathSegment), assetPath);
}

async function getManifest(modelUrn, credentials) {
    const resp = await new APS.DerivativesApi().getManifest(modelUrn, {}, null, credentials);
    return resp.body;
}

async function getDerivativeDownloadInfo(modelUrn, derivativeUrn, token) {
    // const url = `https://developer.api.autodesk.com/modelderivative/v2/regions/eu/designdata/{urn}/manifest/{derivativeurn}/signedcookies`;
    const url = `https://developer.api.autodesk.com/modelderivative/v2/designdata/${modelUrn}/manifest/${encodeURIComponent(derivativeUrn)}/signedcookies`;
    const response = await axios(url, { headers: { 'Authorization': `Bearer ${token}` } });
    return {
        url: response.data.url,
        cookies: response.headers['set-cookie']
    };
}

async function getDerivative(modelUrn, derivativeUrn, token) {
    const { url, cookies } = await getDerivativeDownloadInfo(modelUrn, derivativeUrn, token);
    const response = await axios(url, { headers: { 'Cookie': cookies.join(';') }, responseType: 'arraybuffer' });
    return response.data;
}

async function getSvfAssets(modelUrn, derivativeUrn, token) {
    const data = await getDerivative(modelUrn, derivativeUrn, token);
    const zip = new Zip(data);
    const manifestEntry = zip.getEntry('manifest.json');
    if (!manifestEntry) {
        throw new Error('Missing manifest.js');
    }
    const manifest = JSON.parse(manifestEntry.getData().toString());
    return (manifest.assets || [])
        .map(asset => asset.URI)
        .filter(uri => uri.indexOf('embed:/') === -1);
}

async function getF2dAssets(modelUrn, derivativeUrn, token) {
    const data = await getDerivative(modelUrn, resolveAssetPath(derivativeUrn, 'manifest.json.gz'), token); // Note: the file is automatically unzipped by axios
    const manifest = JSON.parse(data.toString('utf8'));
    return (manifest.assets || [])
        .map(asset => asset.URI)
        .filter(uri => uri.indexOf('embed:/') === -1)
        .concat(['manifest.json.gz']);
}

module.exports = {
    findModelAssets
};
