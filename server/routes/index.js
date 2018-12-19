const { LicenseQuery } = require('../query');
const { LocalStorage } = require('../service');
const LicenseRoute = require('./license');

module.exports = {
  LicenseRoute: LicenseRoute(LicenseQuery, LocalStorage),
};
