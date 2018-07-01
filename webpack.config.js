require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// Loaders
const RULES = {
  styles: {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader: 'css-loader',
        options: {
          sourceMap: false,
          minimize: true,
          url: false
        }
      },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: false
          }
        }
      ]
    })
  },
  scripts: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['es2016', 'react', 'stage-2'],
        plugins: []
      }
    }
  }
};
// Module
const MODULE = {
  rules: [
    RULES.styles,
    RULES.scripts
  ]
};
// Plugins
const PLUGINS = [
  new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
  }),
  new ExtractTextPlugin({
    filename: 'style.bundle.css',
    allChunks: true
  })
];
// CONFIG
module.exports = {
  entry: [
    './src/index.js',
    './src/app/styles/main.scss'
  ],
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js', '.scss'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: MODULE,
  plugins: PLUGINS,
  stats: {
    children: false
  }
};
