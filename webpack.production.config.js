var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');

module.exports = {
  devtool: 'eval',
  entry: [ 
    mainPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel',
        exclude: [nodeModulesPath],
      }, {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, 'app')
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  }
};