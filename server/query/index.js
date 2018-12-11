const { License } = require('../db/models');
const LicenseQuery = require('./license');

module.exports = {
  LicenseQuery: new LicenseQuery(License),
};
