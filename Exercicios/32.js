/**32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros */

function arrMedia (arr) {
    let prod = 0
    for( let i = 0; i < arr.length; i++) {
        prod += arr[i]
    }
    let total = prod / arr.length
    return (`A média é de ${total}`)

}

vetor = [10, 5, 7, 3]
console.log(arrMedia(vetor))