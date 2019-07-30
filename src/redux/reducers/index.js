import { combineReducers } from "redux"
import mainReducer from "./main"

//export combined reducers
export default combineReducers({
    main: mainReducer
})
