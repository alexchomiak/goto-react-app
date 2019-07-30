import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import Help from "./help"
import Logo from "./react.png"
export default function App() {
    const Info = () => (
        <div>
            <h3>A simpler, lightweight, boilerplate React project</h3>
            <p> Created by Alex Chomiak </p>
            <a href="https://github.com/alexchomiak">https://github.com/alexchomiak</a>
        </div>
    )
    return (
        <div>
            <img src={Logo} className="logo" />
            <div id="app">
                <a className="title" href="https://github.com/alexchomiak/goto-react-webpack">
                    GoTo React Webpack
                </a>

                <Router>
                    <NavLink exact className="nav-link" activeClassName="nav-link--active" to="/">
                        Home
                    </NavLink>
                    <NavLink exact className="nav-link" activeClassName="nav-link--active" to="/help">
                        Help
                    </NavLink>
                    <Route path="/" exact component={Info} />
                    <Route path="/help" exact component={Help} />
                </Router>
            </div>
        </div>
    )
}
