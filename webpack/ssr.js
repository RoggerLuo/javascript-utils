const basic = require('./basic')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const projectRoot = path.resolve(__dirname, '../')

function product(basic){
    basic.entry.app = `${projectRoot}/src/indexSSR.js`
    basic.mode = 'production'
    basic.output.filename = 'bundle.[hash].js'
    basic.module.rules.push({
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 'css-loader' ]
        })
    })
    basic.target = 'node'
    basic.node = {
       __filename: true,
       __dirname: true,
       // See "Other node core libraries" for additional options.
     }
    basic.plugins = [
        new CleanWebpackPlugin(['dist'],{ root: projectRoot }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${projectRoot}/index.html`,
            inject: true
        }),
        new ExtractTextPlugin('style.[chunkhash].css', { allChunks: true })
    ]
    return basic
}

const configuration = product(basic)
let compiler = webpack(configuration);
compiler.apply(new webpack.ProgressPlugin());
compiler.run(function(err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})