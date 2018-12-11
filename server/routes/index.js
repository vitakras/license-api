const { LicenseQuery } = require('../query');
const LicenseRoute = require('./license');

module.exports = {
  LicenseRoute: LicenseRoute(LicenseQuery),
};
