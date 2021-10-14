const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin ({
            title: "A Lot TODO",
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css?$/i,
                use: ['css-loader', 'style-loader']
            }
        ]
    }
}