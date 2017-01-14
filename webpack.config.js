const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./js",
  output: {
    path: "dist",
    filename: "out.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
