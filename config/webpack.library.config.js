const path = require("path")
const settings = require("./settings")
const modules = require("./modules")
const webpack = require("webpack")
const env = require("./environment")
//********  excludes libraries from bundle file, decreases file size
let externals = {}
if (settings.includeReactInBundle) {
    externals["react"] = "React"
    externals["react-dom"] = "ReactDOM"
    externals["react-router"] = "ReactRouter"
    externals["react-redux"] = "react-redux"
}
if (settings.includeReduxInBundle) {
    externals["redux"] = "Redux"
}
// ********

module.exports = {
    mode: "production",
    resolve: settings.resolvePaths,
    entry: ["@babel/polyfill", path.resolve(__dirname, "../src/index.js")],
    output: {
        path: path.resolve(__dirname, `../${settings.libraryDirectory}`),
        filename: `${settings.libraryFileName}.js`,
        library: settings.libraryName,
        libraryTarget: "umd",
        auxiliaryComment: "Alex Chomiak webpack configuration. https://github.com/alexchomiak"
    },
    optimization: {
        minimize: true
    },
    externals,
    module: modules,
    plugins: [new webpack.DefinePlugin(env)]
}
