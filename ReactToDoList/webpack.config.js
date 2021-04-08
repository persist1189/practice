const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'), // entry 為哪個資料夾
    entry: {
        'index': './index.jsx',
        'Obj': 'Obj'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].js'
    },
    resolve: {
        modules: [
            path.resolve('src'),
            path.resolve('node_modules'),
            path.resolve('src/Object'),
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
                test: /\.(scss)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
                        },
                    },
                    { loader: 'sass-loader'},
                ],
            },
            {
                test: /\.styl$/,
                use: [{ loader: 'style-loader'},
                    {
                      loader: 'css-loader',
                      options: {
                          modules: true
                      }
                    },
                    { loader: 'stylus-loader'},
                    
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
        ],
    },
};