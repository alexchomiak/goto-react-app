const webpack = require("webpack")
const path = require("path")
const settings = require("./settings")
const prod = require("./webpack.production.config")
module.exports = {
    mode: "development",
    ...prod,
    devServer: {
        contentBase: path.resolve(__dirname, `../public/`),
        port: 2000,
        hot: true,
        watchContentBase: true,
        compress: true,
        historyApiFallback: true
    }
}
