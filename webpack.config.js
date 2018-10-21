const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'app.[hash].js',
        path: __dirname + '/dist',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/static/index.html' }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    /**
     * https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
        proxy: {
            '/graphql': 'http://localhost:3200',
        },
    },
}
