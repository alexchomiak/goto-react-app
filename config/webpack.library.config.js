const webpack = require("webpack")
const path = require("path")
const settings = require("./settings")
const modules = require("./module")

//********  excludes libraries from bundle file, decreases file size
let externals = {}
if (settings.includeReactInBundle)
    externals = {
        ...externals,
        react: "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        "react-redux": "ReactRedux"
    }
if (settings.includeReduxInBundle) {
    externals = {
        ...externals,
        redux: "Redux"
    }
}
// ********

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "../src/library.js"),
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
    module: modules
}
