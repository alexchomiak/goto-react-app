const webpack = require("webpack")
const path = require("path")
const settings = require("./settings")
const CopyPlugin = require("copy-webpack-plugin")
module.exports = {
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
