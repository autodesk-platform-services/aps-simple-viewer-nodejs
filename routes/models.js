const express = require('express');
const { listObjects, urnify, getPublicToken } = require('../services/aps.js');
const { findModelAssets } = require('../services/svf-utils.js');

let router = express.Router();

router.get('/api/models', async function (req, res, next) {
    try {
        const objects = await listObjects();
        res.json(objects.map(o => ({
            name: o.objectKey,
            urn: urnify(o.objectId)
        })));
    } catch (err) {
        next(err);
    }
});

// Get URNs of all SVF/F2D assets available for a specific model
router.get('/api/models/:urn/assets', async function (req, res, next) {
    try {
        const credentials = await getPublicToken();
        const assets = await findModelAssets(req.params.urn, credentials);
        res.json(assets);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
