const path = require("path");
const webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, './app/'),
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
                test: /\.js$/, // files ending with .js
                exclude: /node_modules/, // exclude the node_modules directory
                loader: "babel-loader" // use this (babel-core) loader
            },{
            test: /\.scss$/, // files ending with .scss
            use: ExtractTextWebpackPlugin.extract({
                use: ['css-loader', 'sass-loader'], // use these loaders
                fallback: 'style-loader',
            })
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css')
    ],
    devServer: {
        open: true, // to open the local server in browser
        contentBase: __dirname + '/'
    },
    devtool: 'eval-source-map'
};