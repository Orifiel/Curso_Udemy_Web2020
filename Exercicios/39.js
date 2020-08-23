/** 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

let A = [1,2,3]
let B = [4,3,2,2]

function ChangeVet(vetorA, vetorB) {
   if ( vetorA.length === vetorB.length) {
      for(let i = 0; i < vetorA.length; i++){
         vetorA[i] = vetorA[i] + vetorB[i]
         vetorB[i] = vetorA[i] - vetorB[i]
         vetorA[i] = vetorA[i] - vetorB[i]
         }   
         console.log(`Novo vetor A = ${vetorA}`)
         console.log(`Novo vetor B = ${vetorB}`)   
   } else {
         return console.log('Vetores de Tamanhos diferentes')
   }
}

console.log(A)
console.log(B)
ChangeVet(A,B)
