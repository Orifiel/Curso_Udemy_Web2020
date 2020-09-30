const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformJS(cb) {
    //ao inves de retornar a callback, podemos retornar todas as tasks diretamente no return
    return gulp.src('src/**/*.js')
        .pipe(babel({
            //ignora comentarios dos arquivos
            comments: false,
            //usa o javascript mais moderno
            presets: ["env"],
        }))
        //minifica todo o arquivo, removendo espaços e tabulações.
        .pipe(uglify())
        //obtendo no console a mensagem de erro
        .on('error', err => console.log(err))
        //unificando os dois arquivos em 1
        .pipe(concat('codigo.min.js'))
        //definindo um local para "salvar" o novo arquivo
        .pipe(gulp.dest('build'))
}

function fim (cb) {
    
    console.log('FIM')
    return cb()
}

exports.default = series(transformJS, fim)