const adapters = require('../adapters');

module.exports = (adapter, name, { fields, options = {} }) => {
  if (!fields) {
    throw new Error('fields not defined!');
  }

  return adapters[adapter].createSchema(name, fields, options);
};
