const path = require('path');
const fs = require('fs');

class LocalStorage {
  constructor(config) {
    this.root_path = path.resolve(config.path);
  }

  download(key, writableStream) {
    const stream = fs.createReadStream(path.resolve(this.root_path, key));
    stream.pipe(writableStream);
  }
}

module.exports = LocalStorage;
