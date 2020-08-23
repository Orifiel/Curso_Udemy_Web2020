/**30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e 
 * menor valor dentro do vetor */

function doMaiorMenor (arr) {
    let todos = arr.sort((a,b) => a > b ? 1 : -1)
    let final = todos.length -1
    console.log(todos[final],todos[0])
}

doMaiorMenor([5,9,3,71,10,4,8,6,11])