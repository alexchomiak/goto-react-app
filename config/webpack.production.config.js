const webpack = require("webpack")
const path = require("path")
const settings = require("./settings")
const CopyPlugin = require("copy-webpack-plugin")
const modules = require("./modules")
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "../src/library.js"),
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
        ])
    ],
    module: modules
}
