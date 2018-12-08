const express = require('express');
const debug = require('debug')('app');

const licenseRoute = require('./routes/license');

const app = express();

app.use('/', licenseRoute);

const port = process.env.PORT || 3000;


app.listen(port, () => {
  debug(`listening on port ${port}`);
});
