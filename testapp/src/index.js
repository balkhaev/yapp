const path = require('path');
const yapp = require('yapp');

const app = yapp({
  db: {
    adapter: 'mongodb',
  },
  schema: {
    path: path.join(__dirname, 'schemas'),
  },
});

module.exports = app;
