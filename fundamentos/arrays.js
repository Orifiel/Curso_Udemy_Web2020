const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])//retorna os valores contidos nas posições 0 e 3 do array
console.log(valores[4])

valores[4] = 10 //atribui o valor 10 para a posição 4 do array
console.log(valores)
console.log(valores.length)//retorna o tamanho do array

valores.push({id:3}, false, null, 'teste') //insere o conteudo no final do array
console.log(valores)

console.log(valores.pop())//retorna o ultimo elemento do array, excluindo-o do mesmo
delete valores [0]//apaga o valor da posição zero do array
console.log(valores)

console.log(typeof valores)