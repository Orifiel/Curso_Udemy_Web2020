/**31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há 
 * nesse vetor e imprime a quantidade no console */

function Negative (arr) {
    let negativos = 0
   
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < 0) { negativos++ }
    }

    return(`São ${negativos} negativos`)
}
array = [10, 5, -7, -3, 1, 3, -11, -20, 6, 9]
console.log(Negative(array))