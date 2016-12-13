var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'www');
var APP_DIR = path.resolve(__dirname, 'src/main');

var config = {
  entry: APP_DIR + '/client.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
   module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets : ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;