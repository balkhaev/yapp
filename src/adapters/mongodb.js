const mongoose, { Schema } = require('mongoose');

const fieldTypeMap = {
  string: String,
  email: String,
  boolean: Boolean,
  password: String,
};

module.exports = {
  connect(uri) {
    return mongoose.connect(uri, {useNewUrlParser: true});
  },
  createSchema(name, fields, options) {
    const data = Object.entries(fields).reduce((acc, [key, value]) => {
      const isString = typeof value === 'string' || value instanceof String;
      const isObject = typeof value === 'object' && value !== null;

      const fieldTypeName = isString ? value : isObject ? value.type : null;
      const fieldType = fieldTypeMap[fieldTypeName];
      const fieldOpts = isObject ? { ...value, type: undefined } : {};

      acc[key] = {
        type: fieldType,
      };

      if (fieldOpts.ref) {
        acc[key].ref = value.ref;
      }
      if (fieldOpts.default) {
        acc[key].default = value.default;
      }
      if (fieldOpts.min) {
        acc[key].min = value.min;
      }
      if (fieldOpts.max) {
        acc[key].max = value.max;
      }

      return acc;
    }, {});

    const schema = new Schema(data, options);
    const model = mongoose.model(name, schema);

    return model;
  }
}
