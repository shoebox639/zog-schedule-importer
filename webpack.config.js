const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./js",
  output: {
    path: "dist",
    filename: "out.js"
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['es2015']
  //       }
  //     }
  //   ],
  // },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};
