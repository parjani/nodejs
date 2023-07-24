const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app.js', // Replace with the correct path to your main file (app.js).
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Other configuration options...
};
