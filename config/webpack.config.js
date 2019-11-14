/*
 * File: /config/webpack.config.js
 * File Created: Monday, 29th July 2019 4:50:47 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:26:36 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

const path = require('path')
const settings = require('./settings')
const prod = require('./webpack.production.config')
module.exports = {
  ...prod,
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, `../public/`),
    port: 2000,
    hot: true,
    watchContentBase: true,
    compress: true,
    historyApiFallback: true,
    overlay: true,
    proxy: {
      '/api': {
        target: settings.apiProxyUrl,
        secure: false,
      },
    },
  },
}
