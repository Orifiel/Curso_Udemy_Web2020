/**28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos 
 * são ímpares. */

function arrAll (arr){
    const todos = arr
    const pares = []
    const impares = []
    let qntPares = 0
    let qntImpares = 0

    for ( let i = 0; i < todos.length; i++ ){
        if (todos[i] % 2 == 0) { qntPares += 1; pares.push(todos[i]) }
        else { qntImpares+= 1; impares.push(todos[i]) }
    }

console.log(`${pares}`)
console.log(`${impares}`)
console.log(`Quantidade de números pares ${qntPares}`)
console.log(`Quantidade de números impares ${qntImpares}`)
}
arrAll([4,5,1,7,9,5,6,5,4,4])