const express = require('express');
const { PORT } = require('./config.js');

let app = express();
app.use(express.static('wwwroot'));
app.use(require('./routes/auth.js'));
app.use(require('./routes/models.js'));
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });
