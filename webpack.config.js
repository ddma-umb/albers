const path = require('path');

module.exports = {
  entry: './src/albers.js',
  output: {
    filename: 'albers.js',
    path: path.resolve(__dirname, 'dist'),
  },
};