const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,
{
    mode:'development',
    output:
    {
        filename: "main.js",
        path: path.resolve(__dirname,"public")
    },
    plugins:[new HtmlWebpackPlugin({template:'./src/templates/template.html'})]
});