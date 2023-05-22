const express = require('express');
const { listObjects, urnify } = require('../services/aps.js');
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
        const assets = await findModelAssets(req.params.urn);
        res.json(assets);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
