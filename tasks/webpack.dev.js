const { merge }= require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  output: {
    path: `${__dirname}/../../origo/plugins`,
    publicPath: '/build/js',
    filename: 'origofilteretuna.js',
    libraryTarget: 'var',
    libraryExport: 'default',
    library: 'Origofilteretuna'
  },
  mode: 'development',
  devtool: 'source-map',
  module: {},

  devServer: {
    static: './',
    port: 9010,
    devMiddleware: {
      //index: true,
      //mimeTypes: { 'text/html': ['phtml'] },
      //publicPath: '/publicPathForDevServe',
      //serverSideRender: true,
      writeToDisk: true
    }
  }
});
