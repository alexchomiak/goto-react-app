const path = require("path")
const settings = require("./settings")
const CopyPlugin = require("copy-webpack-plugin")
const modules = require("./modules")
module.exports = {
    mode: "production",
    resolve: settings.resolvePaths,
    entry: path.resolve(__dirname, "../src/index.js"),
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
