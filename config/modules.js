module.exports = {
    rules: [
        {
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", { loader: "sass-loader", options: { loadPaths: ["src/styles/*"] } }]
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                "file-loader",
                {
                    loader: "image-webpack-loader"
                }
            ]
        }
    ]
}
