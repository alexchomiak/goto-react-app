const webpack = require("webpack")
const path = require("path")
const settings = require("./settings")
module.exports = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, `../public`),
        filename: `${settings.bundleName}.js`
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
    },
    devServer: {
        contentBase: path.resolve(__dirname, `../public/`),
        port: 2000,
        hot: true,
        watchContentBase: true,
        compress: true,
        historyApiFallback: true
    }
}
