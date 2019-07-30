import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers"
import Actions from "./actions"
//initialize redux store
const store = createStore(reducers, {}, applyMiddleware())
export default store
export { Actions }
