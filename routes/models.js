const fs = require('fs');
const express = require('express');
const formidable = require('express-formidable');
const { listModels, uploadModel } = require('../services/forge.js');

let router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        res.json(await listModels());
    } catch (err) {
        next(err);
    }
});

router.post('/', formidable(), async function (req, res, next) {
    const file = req.files['model-file'];
    if (!file) {
        res.status(400).send('The required field ("model-file") is missing.');
        return;
    }
    try {
        await uploadModel(file.name, fs.readFileSync(file.path), req.fields['model-zip-entrypoint']);
        res.status(200).end();
    } catch (err) {
        next(err);
    }
});

module.exports = router;
