// path.resolve provides absolute path which is required
// in output.path and module.loaders inclusions
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const readFileSync = require('fs').readFileSync;
let babelrc = JSON.parse(readFileSync('.babelrc', 'utf8'));
const envIndex = babelrc.presets.findIndex(preset => (
  Array.isArray(preset) && preset.includes('env')
));
babelrc.presets[envIndex][1].modules = 'commonjs';


module.exports = {
  entry: [
    'babel-polyfill',
    './polyfills',
    './debug/debugLog.js',
    './debug/restartShortcut',
    './src/index.jsx'
  ],

  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        include: /node_modules/,
        oneOf: [
          {
            test: /node_modules\/mobx/,
            use: [
              'es3ify-loader',
              {
                loader: 'babel-loader',
                options: babelrc
              }
            ]
          },
          {
            loader: 'es3ify-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         modules: true,
        //         sourceMap: true,
        //         importLoaders: 1,
        //         localIdentName: '[name]__[local]--[hash:base64:5]',
        //         camelCase: true
        //       }
        //     },
        //     'sass-loader'
        //   ]
        // })
        use: [
          'style-loader',
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
      },
      {
        test: /_worker\.js$/,
        loader: 'worker-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  devServer: {
    contentBase: '/',
    host: '0.0.0.0',
    historyApiFallback: true,
    inline: true,
    hot: true,
    open: true,
    openPage: '',
    port: 7000
  }
};
