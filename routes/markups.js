const express = require('express');
const fs = require('fs')
const fsPromises = require('fs').promises;
const bodyParser = require('body-parser')

let router = express.Router();

router.get('/api/markups', async function (req, res, next) {
    try {
        const svgString = await fsPromises.readFile(`Markups.svg`, "utf8");
        res.json({ status: 200, markups: svgString });
    } catch (err) {
        next(err);
    }
});

router.post('/api/markups', bodyParser.json(), async function (req, res, next) {
    try {
        fs.writeFile('Markups.svg', req.body.data, (err) => {
            if (err) throw err;
            console.log('SVG written!');
        });
        res.json({ status: 200 });
    } catch (err) {
        next(err);
    }
});


module.exports = router;
