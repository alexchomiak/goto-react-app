/*
 * File: /src/index.js
 * File Created: Friday, 16th August 2019 9:13:53 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:23:49 pm
 * Modified By: Alex Chomiak
 *
 * Author Github: https://github.com/alexchomiak
 */

import ReactDOM from 'react-dom'
import React from 'react'
import App from './components'
import store from './redux'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
