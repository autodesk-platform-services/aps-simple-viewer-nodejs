const express = require('express');
const { listObjects, getUploadUrl, translateObject, getManifest, urnify } = require('../services/aps.js');

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

router.post('/api/models', async function (req, res, next) {
    try {
        const { name } = req.body;
        res.json(await getUploadUrl(name));
    } catch (err) {
        next(err);
    }
});

router.post('/api/models/:urn/translate', async function (req, res, next) {
    try {
        const { urn } = req.params;
        const { entrypoint } = req.body;
        await translateObject(urn, entrypoint);
        res.status(200).end();
    } catch (err) {
        next(err);
    }
});

router.get('/api/models/:urn/status', async function (req, res, next) {
    try {
        const manifest = await getManifest(req.params.urn);
        if (manifest) {
            let messages = [];
            if (manifest.derivatives) {
                for (const derivative of manifest.derivatives) {
                    messages = messages.concat(derivative.messages || []);
                    if (derivative.children) {
                        for (const child of derivative.children) {
                            messages.concat(child.messages || []);
                        }
                    }
                }
            }
            res.json({ status: manifest.status, progress: manifest.progress, messages });
        } else {
            res.json({ status: 'n/a' });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
