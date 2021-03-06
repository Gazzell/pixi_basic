const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    optimization: {
        minimizer: [new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                    comments: false //use it for removing comments like "/*! ... */"
                }
            }
        })]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'resources/assets',
            to: 'assets'
        }]),
        new HTMLWebpackPlugin({
            template: 'resources/index.html',
            filename: 'index.html',
            hash: true,
            minify: false
        })
    ]
}
