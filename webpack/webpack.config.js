const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development', //podemos trocar o valor de mode para production, assim o arquivo gerado é minimizado
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
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
                // 'style-loader', //add CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url() ...
                'sass-loader',
            ]
        }]
    }
}