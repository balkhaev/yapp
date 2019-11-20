const configurator = require('./configurator');
const adapters = require('./adapters')

const {
  db: {
    adapter
  }
} = configurator();

module.exports = adapters[adapter];
