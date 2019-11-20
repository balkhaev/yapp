const path = require('path');
const yapp = require('yapp');

const app = yapp({
  name: 'TestApp',
  db: {
    adapter: 'mongodb',
  },
  schema: {
    path: path.join(__dirname, 'schemas'),
  },
});

module.exports = app;
