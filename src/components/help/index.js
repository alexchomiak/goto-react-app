import React from "react"
import "./help.scss"
export default function Help() {
    return (
        <div id="help">
            <p> App root component in src/components/index.js</p>
            <p>Webpack Compile Settings in /config/settings.js</p>
            <h5>Commands: </h5>
            <ul>
                <li>To start dev server: npm run start</li>
                <li>To compile production build: npm run build</li>
                <li>To compile library: npm run buildlib</li>
            </ul>

            <h5>Installed Packages:</h5>
            <ul>
                <li>React & React-DOM</li>
                <li>Redux & React-Redux</li>
                <li>React-Router-DOM</li>
            </ul>
        </div>
    )
}
