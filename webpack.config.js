const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-url-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'base64-inline-loader?limit=8192',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader',
                ],
            }
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
