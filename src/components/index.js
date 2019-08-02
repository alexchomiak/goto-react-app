import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import Help from "./help"
import Logo from "./react.png"
import "./App.scss"
import Globals from "@utils/globals"
export default function App() {
    // Info component for main route
    const Info = () => (
        <div>
            <h3>{Globals.APP_DESCRIPTION}</h3>
            <p> Created by {Globals.APP_AUTHOR} </p>
            <a href={Globals.APP_AUTHOR_GITHUB}>{Globals.APP_AUTHOR_GITHUB}</a>
        </div>
    )

    return (
        <div>
            <img src={Logo} className="logo" />
            <div id="app">
                <a className="title" href={Globals.APP_REPO}>
                    {Globals.APP_TITLE}
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
