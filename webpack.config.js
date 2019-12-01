const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function(env, argv) {
    const isEnvDevelopmnet = argv.mode === 'development' || !argv.mode;
    const isEnvProduction = argv.mode === 'production';
    return {
        mode: isEnvProduction ? 'production' : isEnvDevelopmnet && 'development',
        devtool: isEnvProduction ? 'source-map' : isEnvDevelopmnet && 'cheap-module-source-map',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        devServer: {
            contentBase: './dist',
            hot: true,
        },
        module: {
            rules: [
                { 
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                { 
                    test: /\.js$/,
                    exclude: /node_modules/,
                    enforce: "pre",
                    use: 'eslint-loader',
                },
                {
                    test: /\.css$/,
                    include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
                    use: [
                        'style-loader',
                        'css-loader?modules'
                    ]
                },
                {
                    test: /\.less$/,
                    include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
                    use: [
                        'style-loader',
                        'css-loader?modules',
                        'less-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ['file-loader']
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.svg$/],
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Github热门项目',
                template: 'public/index.html',
                favicon: 'public/favicon-32x32.png'
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
        resolve: {
            alias: {
              '@': path.resolve('src')
            }
        }
    }
};