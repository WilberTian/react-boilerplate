const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
    context: rootPath,

    entry: {
        index: [
            'webpack-dev-server/client?http://127.0.0.1:3000/',
            'webpack/hot/only-dev-server',
            path.resolve(rootPath, 'src/entries/index')
        ],
        detail: [
            'webpack-dev-server/client?http://127.0.0.1:3000/',
            'webpack/hot/only-dev-server',
            path.resolve(rootPath, 'src/entries/detail')
        ],
    },

    output: {
        path: path.resolve(rootPath, 'dist'),
        publicPath: '../',
        filename: "[name].bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: 2,
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',                                        
            template: rootPath+'/src/htmls/index.html',
            chunks: ['common', 'index']
        }),

        new HtmlWebpackPlugin({
            filename: 'detail.html',                                        
            template: rootPath+'/src/htmls/index.html',
            chunks: ['common', 'detail']
        }),

    ]
};

