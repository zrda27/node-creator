var webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
    entry: {
        index: './src/brower/index.jsx', //编译的入口文件
    },
    output: {
        publicPath: 'build/', //服务器根路径
        path: './public/build', //编译到当前目录
        filename: '[name].js' //编译后的文件名字
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-3',
            exclude: /node_module/,
        }, {
            test: /\.css$/,
            loaders: ['style', 'css', 'autoprefixer']
        }, {
            test: /\.less/,
            loaders: ['style', 'css', 'autoprefixer', 'less'],
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
            loader: 'file-loader?name=[hash].[ext]'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'), //将公用模块，打包进common.js
        new webpack.optimize.UglifyJsPlugin({compress:{
            warnings: false
        }}),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'] //后缀名自动补全
    }
};
