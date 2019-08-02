import ReactDOM from "react-dom"
import React from "react"
import App from "./components"
import store from "./redux"
import { Provider } from "react-redux"
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
