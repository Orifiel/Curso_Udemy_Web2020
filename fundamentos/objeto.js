const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

/*=====================================*/

const a = { name : "teste"}
//atribuindo um endereço na memoria
const b = a
//igualando o endereço de A em B
b.name = 'opa'
//atribuindo um valor para o endereço em B

console.log(b) //B resulta o valor alocado no endereço que é o mesmo endereço...
console.log(a) //... o mesmo endereço atribuido a A. 

// Assim apesar de termos duas constantes diferentes, as duas buscam o mesmo endereço na memoria.

a.name = 'cleiton'
b.name = 'nicolas'

console.log(a)
console.log(b)

/**No exemplo acima, ambos A e B vão ter a ultima atribuição feita (b.name), já que as duas referenciam
 * o mesmo endereço.
 *
 * Atribuição por valor
 * 
 * let c = 2
 * let d = c
 * d++
 * 
 * o valor obtido em D seria 4, onde D está obtendo a atribuição por valor da variavel C e sendo 
 * incrementada mais tarde através do operando ++
 * 
 * Já no exemplo anterior, a atribuição é feita por referência
 * 
 * const a = { nome : "Cleiton"}
 * const b = a
 * 
 * o valor obtido em B é Cleiton e na const A tb.
 * 
 */