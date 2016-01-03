var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            './app/main.js'
        ],
    },
    output: {
      path: __dirname,
      filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!autoprefixer!sass',
                include : path.resolve(__dirname, '../app/style/')
            },
            {
                test: /\.js?$/,
                loader: 'babel',
                include: path.resolve(__dirname, '../app')
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'file?name=[hash].html',
                include: path.resolve(__dirname, '../app/assets/')
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                loader: 'file?name=fonts/[hash].[ext]',
                include: path.resolve(__dirname, '../app/assets/fonts/')
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file?name=imgs/[hash].[ext]',
                include: path.resolve(__dirname, '../app/assets/imgs/')
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
