const express = require('express');
const fs = require('fs')
const fsPromises = require('fs').promises;

let router = express.Router();

router.get('/api/markups', async function (req, res, next) {
    try {
        const path = `./${req.query.urn}.svg`;
        const fileExists = async path => !!(await fsPromises.stat(path).catch(e=>false));
        const exists =await fileExists(path);
        if (exists) {
            const svgString = await fsPromises.readFile(`${req.query.urn}.svg`, "utf8");
            res.json({ status: 200, markups: svgString });
        } else {
            res.json({ status: 200, markups: null });
        }
    } catch (err) {
        next(err);
    }
});

router.post('/api/markups', express.json(), async function (req, res, next) {
    try {
        fs.writeFile(`${req.body.urn}.svg`, req.body.data, (err) => {
            if (err) throw err;
            console.log('SVG written!');
        });
        res.json({ status: 200 });
    } catch (err) {
        next(err);
    }
});


module.exports = router;
