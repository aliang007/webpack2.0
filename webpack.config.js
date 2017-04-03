const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        main: "./src/app.js",
        // a: './src/js/a.js',
        // b: './src/js/b.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: "js/[name].js",
        // publicPath: 'http://www.cdn.com/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [
                    path.resolve(__dirname, "/node_modules")
                ],
                include: [
                    path.resolve(__dirname, "/src")
                ],
                query: {
                // options: {
                    "presets": ["latest"]
                }
            },
            {
                test: /\.(css|scss)$/,
                loader: "style-loader!css-loader?importLoaders=1!postcss-loader!sass-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.tpl$/,
                loader: "ejs-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [  //400000 => 400kb
                    "url-loader?limit=200000&name=assets/[name]-[hash:8].[ext]",
                    // "image-webpack-loader"
                ]
                
            }
            
        ]
    },
    plugins: [
    
        // 自动生成html
        new htmlWebpackPlugin({
            filename: 'index.html', //index-[hash].html
            template: 'index.html',
            inject: 'body',
            title: 'hello-loader',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            // chunks: ['a', 'b'],
            // excludeChunks: ['a'],
        }),

        //自定义loader添加插件
        new Webpack.LoaderOptionsPlugin({
            options: {
                //添加postcss-loader的插件
                postcss: function() {
                    return [
                        require('autoprefixer')({
                            broswers: ['last 5 versions']
                        })
                    ];
                }
            }
        })
    ]

}
