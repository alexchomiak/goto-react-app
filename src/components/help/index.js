/*
 * File: /src/components/help/index.js
 * File Created: Friday, 16th August 2019 9:13:53 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:24:33 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import React from 'react'
import './help.scss'
export default function Help() {
  return (
    <div id="help">
      <h4> App root component in src/components/index.js</h4>
      <h4>Webpack Compile Settings in /config/settings.js</h4>
      <h4>Commands: </h4>
      <ul>
        <li>To start dev server: npm run start</li>
        <li>To compile production build: npm run build</li>
        <li>To compile library: npm run buildlib</li>
      </ul>

      <h4>Installed Packages:</h4>
      <ul>
        <li>React & React-DOM</li>
        <li>Redux & React-Redux</li>
        <li>React-Router-DOM</li>
      </ul>
      <h4>Comes with support for environment variables in config!</h4>
      <p>{ENV_VARIABLE}</p>
    </div>
  )
}
