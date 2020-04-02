/**23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
   let notas = []       //inicia o array vazio
   notas.push(nota1)    //adiciona a primeira nota no array
   notas.push(nota2)    //adiciona a segunda nota no array
   notas.push(nota3)    //adiciona a terceira nota no array
   notas.sort((a,b) => a < b ? 1 : -1)    /*usando a função SORT do array, percorre o array 
   organiza entre 2 numeros (A e B) onde se A é menor B então mantem sua posição no array senão
   o menor valor cai uma posição. Ex
      [1,2,3].sort((1,2) => 1 < 2 ?(sendo verdade) 1 :(senão) -1 )
   */

   let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
   console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
   //Nesse console.log tb ocorre a condicional onde: avalia-se mediaFinal < 5 ?(sendo verdade) Reprovador :(senao) Aprovado
}

calcularNotaFinal(123, 2.8, 6, 3.5)