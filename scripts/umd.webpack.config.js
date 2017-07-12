// @flow

const path = require('path');
const webpack = require('webpack');

const LIBRARY_NAME = 'material-son';
const baseConfig = {
  entry: {
    'material-son': path.join(__dirname, '../src/index.js'),
  },
  output: {
    path: path.join(__dirname, '../build/umd'),
    library: LIBRARY_NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [],
};

let config;

if (process.env.NODE_ENV === 'production') {
  config = Object.assign({}, baseConfig, {
    output: Object.assign({}, baseConfig.output, {
      filename: `${LIBRARY_NAME}.production.min.js`,
    }),
    plugins: baseConfig.plugins.concat([
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
        },
      }),
    ]),
  });
} else {
  config = Object.assign({}, baseConfig, {
    output: Object.assign({}, baseConfig.output, {
      filename: `${LIBRARY_NAME}.development.js`,
    }),
  });
}

module.exports = config;
