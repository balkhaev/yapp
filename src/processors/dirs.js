const fs = require('fs');
const path = require('path');
const processFiles = require('./files');

module.exports = dirpath => {
  return fs.readdirSync(dirpath).reduce((acc, childpath) => {
    if (childpath.includes('.')) {
      return acc;
    }

    return {
      ...acc,
      [childpath]: processFiles(path.join(dirpath, childpath)),
    };
  }, {});
};
