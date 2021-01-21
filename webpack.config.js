const path = require('path');

module.exports = {
  entry: './src/albers.js',
  output: {
    filename: 'albers.mjs',
    path: path.resolve(__dirname, 'dist'),
  },
};