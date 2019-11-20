const fs = require('fs');
const path = require('path');

module.exports = folderpath => {
  return fs.readdirSync(folderpath).reduce((acc, filename) => {
    if (filename === 'index.js') {
      return acc;
    }
    if (!filename.includes('.')) {
      return acc;
    }

    const [name] = filename.split('.');

    return {
      ...acc,
      [name]: require(path.join(folderpath, filename)),
    };
  }, {});
};
