import APS from 'forge-apis';
import { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET } from './config.js';

const internalAuthClient = new APS.AuthClientTwoLeggedV2(APS_CLIENT_ID, APS_CLIENT_SECRET, ['bucket:read', 'data:read', 'data:create', 'data:write'], true);
const publicAuthClient = new APS.AuthClientTwoLeggedV2(APS_CLIENT_ID, APS_CLIENT_SECRET, ['viewables:read'], true);

async function getInternalToken() {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
}

export async function getAccessToken() {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
}

export async function listObjects() {
    const api = new APS.ObjectsApi();
    let resp = await api.getObjects(APS_BUCKET, { limit: 64 }, null, await getInternalToken());
    let objects = resp.body.items;
    while (resp.body.next) {
        const startAt = new URL(resp.body.next).searchParams.get('startAt');
        resp = await api.getObjects(APS_BUCKET, { limit: 64, startAt }, null, await getInternalToken());
        objects = objects.concat(resp.body.items);
    }
    return objects;
}

export async function uploadObject(objectName, buffer) {
    const api = new APS.ObjectsApi();
    const results = await api.uploadResources(
        APS_BUCKET,
        [{ objectKey: objectName, data: buffer }],
        { useAcceleration: false, minutesExpiration: 15 },
        null,
        await getInternalToken()
    );
    if (results[0].error) {
        throw results[0].completed;
    } else {
        return results[0].completed;
    }
}

export async function translateObject(urn, entrypoint) {
    const api = new APS.DerivativesApi();
    const job = {
        input: { urn },
        output: { formats: [{ type: 'svf2', views: ['2d', '3d'] }] }
    };
    if (entrypoint) {
        job.input.compressedUrn = true;
        job.input.rootFilename = entrypoint;
    }
    const resp = await api.translate(job, {}, null, await getInternalToken());
    return resp.body;
}

export function urnify(id) {
    return Buffer.from(id).toString('base64').replace(/=/g, '');
}