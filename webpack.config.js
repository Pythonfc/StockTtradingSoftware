
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'), /* 指定打包的路径由来 */
    output: {
        path: path.join(__dirname, './dist'),     /* 指定打包好的路劲在哪里 */
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), 
            filename: 'index.html'
        }),
        new vueLoaderPlugin()
    ],
    node: {
        fs: 'empty',
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            { test: /\.(png|jpg)$/, use: 'url-loader'},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},

            // 不包括node_module里面的js，否则文件太大了
            { test: /\.js$/, use: 'babel-loader', exclude: /node_module/}
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}