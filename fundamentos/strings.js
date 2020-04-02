const escola = "Cod3r"

console.log(escola.charAt(4)) /**traz a string no indice 4, considerando o inicio do conjunto em 0 */
console.log(escola.charAt(5)) 

console.log(escola.charCodeAt(3)) // traz o codigo unicode do caracter encontrado na posição 3
console.log(escola.indexOf('2')) //tenta localizar

console.log(escola.substring(1)) //retorna a string apartir da posição 1 (excluindo nesse caso a posição 0)
console.log(escola.substring(0,3))//retorna a string iniciando em 0 e trazendo 3 caracteres

console.log("Escola ".concat(escola).concat("!"))//concatena strings sejam elas armazenadas em varias ou direto na sentença

console.log("Escola "+(escola)+("!"))
//No caso da concatenação, pode se usar o simbolo de + que tambem funciona

console.log(escola.replace(3,"e")) //substituindo parte da string, por outro valor. (out: Coder)

console.log('Ana,Maria,Pedro'.split(','))// converte uma string em um array, sepadando onde tem virgula

