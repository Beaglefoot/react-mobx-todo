// path.resolve provides absolute path which is required
// in output.path and module.loaders inclusions
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const webpack = require('webpack');

const devModuleConfig = require('./webpack.config.js');

module.exports = Object.assign({}, devModuleConfig, {
  entry: './src/index.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js'
  },

  module: {
    rules: devModuleConfig.module.rules
      .filter(({ test }) => test.toString() !== /\.s[ac]ss$/.toString())
      .concat({
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                camelCase: true
              }
            },
            'sass-loader'
          ]
        })
      })
  },

  devtool: false,

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: '../index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('style.css'),
    new MinifyPlugin(),
    new BundleAnalyzerPlugin()
  ]
});
