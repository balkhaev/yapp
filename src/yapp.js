const adapters = require('./adapters')
const processors = require('./processors');
const configurator = require('./configurator');

function yapp(config = {}) {
  const {
    db: {
      adapter,
      connect: { uri },
    },
    schema,
    api,
  } = configurator(config);

  adapters[adapter].connect(uri);

  return {
    models: processors.schema.call(null, adapter, ...Object.entries(processors.files(schema.path))),
    apis: processors.api.call(null, ...Object.entries(processors.dirs(api.path))),
  };
}

module.exports = yapp;
