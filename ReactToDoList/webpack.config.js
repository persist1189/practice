const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, './src'), // entry 為哪個資料夾
    entry: {
        'index': './index.js',
        'Obj': 'Obj'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].js?[hash8]'
    },
    resolve: { 
        modules: [
            path.resolve('src'),
            path.resolve('node_modules'),
            path.resolve('src/Object'),
            path.resolve('src/images'),
            path.resolve('src/assets'),
        ],
        extensions: ['.js']
    },
    devServer: {
        compress: true,
        port: 9000,
        stats: {
            asserts: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            source: false,
            version: false,
            warnings: false
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            path: path.resolve(__dirname,'/dist'),
            filename: "./style/index.css",
        }),
        new CopyPlugin({
            patterns: [
              { from: "assets", to: "assets" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /.(jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
                include: path.resolve('.'),
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash8]'
                },
                include: path.resolve('src/assets'),
                exclude: path.resolve('./node_modules'),
            },
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: { 
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            },
                        }
                    },
                    'sass-loader'
                ],
                include: path.resolve('src'),
                exclude: path.resolve('./node_modules'),
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    "stylus-loader"
                ],
                include: path.resolve('src/style'),
                exclude: path.resolve('./node_modules'),
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'
                ],
                include: path.resolve('src'),
                exclude: path.resolve('./node_modules'),
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: path.resolve('.'),
            },
            {
                test: /\.(png|jpg|gif)$/i,
                include: path.resolve('src/images'),
                exclude: path.resolve('./node_modules'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[path][name].[ext]?[hash:8]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                               progressive: true,
                               quality: 65
                            },
                            optipng: {
                               enabled: false,
                            },
                            pngquant: {
                               quality: '65-90',
                               speed: 4
                            },
                            gifsicle: {
                              interlaced: false,
                            },
                        }
                    }
            ]
            },
        ],
    },
};