const fabricantes = ['Mercedes','Audi','BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricantes) {
    console.log(fabricantes)
})

/*Função callback é uma função que é chamada conforme se depara com uma condição especifica*/
