const express = require('express');
const { PORT } = require('./config.js');

let app = express();
app.use(express.static('public'));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/models', require('./routes/models.js'));
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });
