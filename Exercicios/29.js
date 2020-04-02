/**29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */
//arr.sort((a,b) => a > b ? 1 : -1) => organiza o arr de forma crescente

function checkArr (arr) {
    const todos = arr.sort((a,b) => a > b ? 1 : -1)
    let contIn = 0
    let contOut = 0
   
    for (let i = 0; i < todos.length; i++) {
        
        
        if ( todos[i] >= 10 && todos[i] <= 20 ){
            
            contIn = contIn + 1 
        } 
        else { 
            contOut = contOut + 1 
        }
        
    }
    console.log(todos)
    console.log(`Existem ${contIn} dentro do intervalo`)
    console.log(`Existem ${contOut} fora do intervalo`)

}

checkArr([20,3,7,11,12,4,8,2,21,3])