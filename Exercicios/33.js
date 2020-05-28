/**33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores 
 * deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o 
 * terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os
 vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

const blendVet = (a,b,c) => {
    vetor = a.concat(b)
    vetorfull = vetor.concat(c)

    return console.log(vetorfull) 
}

vetorInteiro = [1,2,3,4]
vetorString = ['a','b','c','d']
vetorDouble = [0.1, 0.2, 0.3, 0.4]

 blendVet(vetorInteiro,vetorString,vetorDouble)

 /*let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['a','b','c','d']
let vetorDouble = [0.1, 0.2, 0.3, 0.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))*/