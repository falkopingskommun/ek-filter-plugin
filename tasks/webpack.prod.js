const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  optimization: {
    nodeEnv: 'production',
    minimize: true
  },
  performance: {
    hints: false
  },
  output: {
    path: `${__dirname}/../build/js`,
    filename: 'origofilteretuna.min.js',
    libraryTarget: 'var',
    libraryExport: 'default',
    library: 'Origofilteretuna'
  },
  devtool: false,
  mode: 'production',
  module: {
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin()
  ]
});
