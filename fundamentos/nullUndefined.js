let valor //não inicializada
console.log(valor)//S>>undefined

valor = null //ausência de valor
console.log(valor)//S>>null

//console.log(valor.toString())
/**S>>
 * TypeError: Cannot read property 'toString' of null
 */

 const produto = {}
 console.log(produto.preco)
 console.log(produto)

 produto.preco = 3.50
 console.log(produto)

 produto.preco = undefined //evitar atribuir undefined 
 console.log(!!produto.preco)
 console.log(produto)

 produto.preco = null //sem preço
 console.log(!!produto.preco)
 console.log(produto)

 /**
  * NULL = ausencia de valor atribuido ao espaço de memoria da "variavel"
  * Undefined = espaço em memoria não definido (uma variavel não existente)
  */