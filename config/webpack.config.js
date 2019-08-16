const path = require("path")
const settings = require("./settings")
const prod = require("./webpack.production.config")
module.exports = {
    ...prod,
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, `../public/`),
        port: 2000,
        hot: true,
        watchContentBase: true,
        compress: true,
        historyApiFallback: true,
        overlay: true,
        proxy: {
            "/api": {
                target: settings.apiProxyUrl,
                secure: false
            }
        }
    }
}
