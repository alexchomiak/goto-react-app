/*
 * File: /config/modules.js
 * File Created: Friday, 2nd August 2019 11:36:29 am
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:26:27 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

module.exports = {
  rules: [
    {
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', { loader: 'sass-loader', options: { loadPaths: ['src/styles/*'] } }],
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
        },
      ],
    },
  ],
}
