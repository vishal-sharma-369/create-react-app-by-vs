const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,
{
    mode:'production',
    output:
    {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname,"public")
    },
    plugins:[new CleanWebpackPlugin(),new HtmlWebpackPlugin({template:'./src/templates/template.html'})]
});