/*
 * File: /config/webpack.production.config.js
 * File Created: Friday, 2nd August 2019 3:11:04 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:26:47 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

const path = require('path')
const settings = require('./settings')
const CopyPlugin = require('copy-webpack-plugin')
const modules = require('./modules')
const webpack = require('webpack')
const env = require('./environment')
const banner = require('./banner')

var DashboardPlugin = require('webpack-dashboard/plugin')
module.exports = {
  mode: 'production',
  resolve: settings.resolvePaths,
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')],
  output: {
    path: path.resolve(__dirname, `../${settings.bundleDirectory}`),
    filename: `${settings.bundleName}.js`,
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'public/',
        to: './',
        ignore: ['*.js'],
      },
    ]),
    new webpack.DefinePlugin(env),
    new DashboardPlugin(),
    banner,
  ],
  module: modules,
}
