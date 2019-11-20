const path = require('path');

const isObject = variable => variable && typeof variable === 'object' && !Array.isArray(variable);

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

let current = {
  db: {
    adapter: 'mongodb',
    connect: {
      uri: 'mongodb://localhost',
    },
  },
  schema: {
    path: path.join(process.cwd(), 'schemas'),
  },
  api: {
    path: path.join(process.cwd(), 'api'),
  },
};

module.exports = config => {
  if (typeof config === 'string' && config instanceof String) {
    return config.split('.').reduce((acc, cur) => {
      if (!acc[cur]) {
        throw new Error('path ' + cur + ' not found!');
      }

      return acc[cur];
    }, current);
  }

  if (isObject(config)) {
    mergeDeep(current, config);
  }

  return config;
};
