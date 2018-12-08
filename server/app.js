const express = require('express');
const debug = require('debug')('app');

const licenseRoute = require('./routes/license');
const db = require('./db/models');

const app = express();

app.use('/', licenseRoute);

const port = process.env.PORT || 3000;

db.sequelize
  .authenticate()
  .then(() => {
    debug('Connection has been established successfully.');
  })
  .catch((err) => {
    debug('Unable to connect to the database:', err);
  });


app.listen(port, () => {
  debug(`listening on port ${port}`);
});
