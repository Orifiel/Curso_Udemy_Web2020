const gulp = require('gulp')
const { series, parallel } = require('gulp')



const antes1 = cb => {
    console.log('Tarefa Antes1')
    return cb()
}


const antes2 = cb => {
    console.log('Tarefa Antes2')
    return cb()
}

//cb é a callback que é usado como parametro da task
function copiar(cb) {
    //selecionando arquivos para entrada do workflow
    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    
    //copiando qualquer conteudo dentro da Pasta A.
    gulp.src('pastaA/**/*.txt')
        //transformações que alteram os arquivos indicados
        .pipe(gulp.dest('pastaB'))
    return cb()
}


const fim = cb => {
    console.log('Tarefa FIM')
    return cb()
}

module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim,
    )