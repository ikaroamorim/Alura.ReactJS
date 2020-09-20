const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "dist",
    },
    entry: "./componentes/lista/listagem-cliente.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./clientes.html",
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use:["html-loader"]
            },
            {
                test: /\.png$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                }
            }
        ]
    }
}