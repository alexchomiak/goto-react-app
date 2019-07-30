const webpack = require("webpack")
const path = require("path")
const settings = require("./settings")
module.exports = {
    entry: path.resolve(__dirname, "../src/library.js"),
    output: {
        path: path.resolve(__dirname, `../${settings.libraryDirectory}`),
        filename: `${settings.libraryFileName}.js`,
        library: settings.libraryName,
        libraryTarget: "umd",
        auxiliaryComment: "Alex Chomiak webpack configuration. https://github.com/alexchomiak"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}
