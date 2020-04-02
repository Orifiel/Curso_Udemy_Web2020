/**
 * 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */
let arr2 = []
let arr3 = []
let vetor = [2,3,4,6,7,8,]

function mult5(arr1,num1){
    for(let i = 0; i < arr1.length; i++)
    if (arr1[i] > 5) { 
        arr2.push(arr1[i] * num1) 
    }
    return arr2
}


function multivet(arr1,num1){
    for(let i = 0; i < arr1.length; i++){
        arr3.push(arr1[i] * num1)
    }
        return arr3
    
}

console.log(mult5(vetor, 3))
console.log(multivet(vetor, 2))
