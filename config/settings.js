/*
 * File: /config/settings.js
 * File Created: Monday, 29th July 2019 4:55:35 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:26:32 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

const path = require('path')
module.exports = {
  //build settings
  bundleName: 'bundle',
  bundleDirectory: 'build',
  //library settings
  libraryDirectory: 'lib',
  libraryFileName: 'library',
  libraryName: 'Libary',
  includeReactInBundle: false,
  includeReduxInBundle: false,
  apiProxyUrl: 'https://localhost:4000',
  // Resolution paths, add paths here to avoid relative path hell for imports!
  resolvePaths: {
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils'),
    },
  },
}
