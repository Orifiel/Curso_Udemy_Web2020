const modoDev = process.env.NODE_ENV !== "production"
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')



module.exports = {
    mode: modoDev ? 'development' : 'production', //podemos trocar o valor de mode para production, assim o arquivo gerado é minimizado
    entry: './src/principal.js',
    output: {
        path: __dirname + '/public',
        filename: 'principal.js'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        ecma: 6,
                    }
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css",
            
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //add CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url() ...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        }]
    }
}