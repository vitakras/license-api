const LocalStorage = require('./local_storage');
const storageConfig = require('../config/storage');

module.exports = {
  LocalStorage: new LocalStorage(storageConfig),
};
