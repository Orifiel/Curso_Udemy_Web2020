/**34 - Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function parseando(nome1, nome2) {
    let realIn =[]
    let arr1 = nome1.toLowerCase().split('')
    let arr2 = nome2.toLowerCase().split('')
    //let arr1 = arrA.split('')
    //let arr2 = arrB.split('')
   // console.log(arr1, arr2)

    for (i in arr1){
        for (j in arr2){
            if(arr1[i] === arr2[j]){realIn.push(arr2[j])} 
        }
    }
    return realIn.sort((a,b) => a > b ? 1 : -1)
}

console.log(parseando('ABCDIF','abcfghi'))

/* Nesse exemplo a função retorna as letras que estão contidas em ambas as strings.*/