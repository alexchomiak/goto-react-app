/*
 * File: /src/redux/index.js
 * File Created: Friday, 16th August 2019 9:13:53 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:25:11 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Actions from './actions'
//initialize redux store
const store = createStore(reducers, {}, applyMiddleware())
export default store
export { Actions }
