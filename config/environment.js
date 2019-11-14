/*
 * File: /config/environment.js
 * File Created: Sunday, 4th August 2019 11:26:14 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:26:21 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

//environment constants
const ENV_VARS = {
  ENV_VARIABLE: 'This is an environment variable! :)',
}

// ---------- prep data for injection
for (var key in ENV_VARS) {
  ENV_VARS[key] = JSON.stringify(ENV_VARS[key]) // stringify all values
}

module.exports = ENV_VARS
