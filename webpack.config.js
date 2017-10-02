var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require("path");
var config = {
    entry: ["./src/index.tsx", 'webpack-dev-server/client?http://localhost:8080'],
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.ejs',
            filename: 'index.html'
        }),
       
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'tslint-loader', enforce: 'pre' },
            { test: /\.tsx?$/, use: ['babel-loader', 'awesome-typescript-loader'] },
            { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, use: 'url-loader?limit=1024&name=fonts/[name].[ext]' },
            { test: /\.(jpg|jpeg|gif|png)$/, use: 'url-loader?limit=10&mimetype=image/(jpg|jpeg|gif|png)&name=images/[name].[ext]' }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'build'),
        hot: true,
        inline: true
    }
};

module.exports = config;