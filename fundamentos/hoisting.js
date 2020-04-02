console.log('a =', a)
var a = 2
console.log('a =', a)

/** Quando declaramos uma variavel em javascript, há o conceito de Hoisting (içamento) uma elevação
 *  daquela variavel esse mesmo exemplo em outras linguagens daria erro. 
 * Para todos os efeitos o que o interpretador fez foi:
 * 
 * // variavel subiu na ordem dos item a serem interpretados, e assim já sendo reconhecido
 * mesmo que sem um valor atribuido. 
 * var a 
 * console.log('a =', a)
 * a = 2
 * console.log('a =', a)
 */

 //console.log('b = ', b)
 let b = 2
 console.log('b =',b)

 /*quando declaramos a variavel usando o LET ele não possui o conceito de hoisting, ou seja ele não "sobe" a 
 a variavel para o inicio da interpretação*/