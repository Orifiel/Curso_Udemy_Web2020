const notas = [6.7, 7.4, 9.8, 8.2, 7.7]

for (let nota in notas) {
    console.log(nota, notas[nota])
}

/* no inicio do For, declaramos como variavel LET para que seus valores
*estejam acessiveis fora do bloco de codigo em que ele existe*/


const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atrib in pessoa) {
    console.log(`${atrib} =  ${pessoa[atrib]}`)
}