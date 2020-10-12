const modoDev = process.env.NODE_ENV !== "production"
const webpack = require('webpack')
const htmlWebPack = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: modoDev ? "development" : "production",
    entry: "./src/assets/js/navegacao.js",
    output: {
        path: __dirname +  "/public",
        filename: 'main.js',
    },
    devServer: {
        contentBase: "./public",
        port: 9001
    },
    optimization: {
        minimizer: [
            new TerserPlugin(
                {
                    parallel: true,
                    terserOptions: {
                        ecma: 6,
                    }
                }
            ),
            new OptimizeCSSAssetsPlugin({}) //minimiza o arquivo css
        ]
    },
    plugins: [
        new MiniCssExtractPlugin( //consolida todos os arquivos css para um unico arquivo
            {
                filename: "estilo.css",
            }
        ),
        new htmlWebPack( //para HTML é necessário um novo objeto para cada pagina
            {
            filename: 'index.html',
            template: './src/index.html',
            minify: true, 

        }),
        new htmlWebPack(
            {
            filename: './paginas/cursos.html',
            template: './src/paginas/cursos.html',
            minify: true, 
        }),
        new htmlWebPack(
            {
            filename: './paginas/inicio.html',
            template: './src/paginas/inicio.html',
            minify: true, 
        }),
        new htmlWebPack(
            {
            filename: './paginas/sobre.html',
            template: './src/paginas/sobre.html',
            minify: true, 
        }),
        new htmlWebPack(
            {
            filename: './paginas/suporte.html',
            template: './src/paginas/suporte.html',
            minify: true, 
        }),
        
    ],
    module: {
        rules:[
            {
                test: /\.s?[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                loaders: 'file-loader',
                options: {
                    name: 'assets/imgs/[name].[ext]'
                }
                
            }
        ]
    }
    
}