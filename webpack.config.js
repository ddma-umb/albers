const path = require('path');

module.exports = {
  entry: './src/albers.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};