const merge = require('webpack-merge');
const common = require('./webpack.config.js');

const HOST = 'localhost';
const PORT = '1111';
// Webpack DevServer
const DEV_SERVER = {
  contentBase: './src',
  hot: true,
  inline: true,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  host: HOST,
  port: PORT,
  stats: {
    colors: true
  }
};

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: DEV_SERVER,
});
