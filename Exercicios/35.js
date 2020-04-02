/**35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console */

/**Array.prototype.push.apply(vetorPilha, vetorAdiciona) 
    add o sendo vetor no final do primeiro vetor,  */
    

let vetorPilha = [1,2,3,4,5]
let vetorAdiciona = [6,7,8,9,10]

function addVetor (arr1,arr2) {
    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i])
        arr1.push(arr2[i])
    }
    
    return arr1
}

console.log(addVetor(vetorPilha, vetorAdiciona))