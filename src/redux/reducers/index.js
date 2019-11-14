/*
 * File: /src/redux/reducers/index.js
 * File Created: Friday, 16th August 2019 9:13:53 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:25:19 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import { combineReducers } from 'redux'
import mainReducer from './main'

//export combined reducers
export default combineReducers({
  main: mainReducer,
})
