const { AuthClientTwoLegged } = require('forge-apis');
const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET } = require('../../config.js');

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

module.exports = {
    getInternalToken,
    getPublicToken
};
