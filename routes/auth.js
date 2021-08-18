const express = require('express');
const { getPublicToken } = require('../services/forge.js');

let router = express.Router();

router.get('/token', async function (req, res, next) {
    try {
        res.json(await getPublicToken());
    } catch (err) {
        next(err);
    }
});

module.exports = router;
