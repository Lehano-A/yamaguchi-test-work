const path = require('path');

const config = {
  static: {
    directory: path.join(__dirname, '/'),
  },

  compress: true,
  port: 8080,
  client: {
    overlay: true,
  },
};

module.exports = { config };
