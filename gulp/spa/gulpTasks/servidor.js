const { prependListener } = require('gulp')
const gulp = require('gulp')
const webserver = require('gulp-webserver') // adiciona a função de servidor
const watch = require('gulp-watch') // recurso para monitorar arquivos
const { default: gulpfile } = require('../gulpfile')

function servidor(){
    return gulp.src('build')
        .pipe(webserver({ //o webserver recebe como paramentro um objeto com os chave e valores 
            port: 8080, //porta de acesso da aplicação
            open: true, // habilita a abertura do navegador ao executarmos o gulp no terminal
            livereload: true, //live reload, habilita para o refresh da pagina automatico.
        }))
}

function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHTML')()) //momnitorando paginas HTML
    watch('src/**/*.scss', () => gulp.series('appCSS')()) //monitorando arquivos scss
    watch('src/**/*.js', () => gulp.series('appJS')()) //monitorando arquivos Javascript
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())//monitorando arquivos de imagem
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}