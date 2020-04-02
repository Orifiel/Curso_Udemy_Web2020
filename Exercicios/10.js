/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/

let analise = (num) => {
    if (num % 3 == 0) return true
    else return false
}


console.log(analise (16))
console.log(analise (1232))
console.log(analise (12))
console.log(analise (34))
console.log(analise (7))
console.log(analise (27))