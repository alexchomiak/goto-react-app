const path = require("path")
const settings = require("./settings")
const CopyPlugin = require("copy-webpack-plugin")
const modules = require("./modules")
const webpack = require("webpack")
const env = require("./environment")
var DashboardPlugin = require("webpack-dashboard/plugin")
module.exports = {
    mode: "production",
    resolve: settings.resolvePaths,
    entry: ["@babel/polyfill", path.resolve(__dirname, "../src/index.js")],
    output: {
        path: path.resolve(__dirname, `../${settings.bundleDirectory}`),
        filename: `${settings.bundleName}.js`
    },
    plugins: [
        new CopyPlugin([
            {
                from: "public/",
                to: "./",
                ignore: ["*.js"]
            }
        ]),
        new webpack.DefinePlugin(env),
        new DashboardPlugin()
    ],
    module: modules
}
