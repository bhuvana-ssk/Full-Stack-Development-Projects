const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
        hash: true,
        title: 'Login App',
        header: 'Login Page',
        metaDesc: 'Validating Login Credentials',
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
        })
       ],
       mode: 'development',
       output: {
        clean: true
    },
    devServer: {
        contentBase: './dist',
        open: true
    }
};