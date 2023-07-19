const express = require('express');
const { getPublicToken, listObjects, urnify } = require('./aps.js');
const { PORT } = require('./config.js');

let app = express();
app.use(express.static('wwwroot'));
app.get('/api/auth/token', async function (req, res, next) {
    try {
        res.json(await getPublicToken());
    } catch (err) {
        next(err);
    }
});
app.get('/api/models', async function (req, res, next) {
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
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });
