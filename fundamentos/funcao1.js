//funcao sem retorno
function imprimirSoma(a,b) {
    console.log( a + b )
}

imprimirSoma(2,3) //S>> 5
imprimirSoma(2) //S>> NaN (not a number)
imprimirSoma("Cleiton ", "Gomes")//S>> concatenação dos parametros

//funcao com retorno

function soma (a, b = 0) {
    return a + b
}

console.log(soma(2,3)) //função retorna o resultado da soma dos dois parametros (5)
console.log(soma(2)) // com o tratamento do parametro B = 0 ele somaŕa normalmente resultando em (2)
console.log(soma()) //sem a definição dos parametros e tendo apenas B com tratamento, o resultado será NaN


