/**40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */

let notas = [2.5,4.0,5.8,7.2,8.0,9.5,]

function conceitoNota(vetor){
   vetor.forEach(element => { 
      if (element >= 0 && element <= 4.9) { console.log('Conceito D') }
      else if (element >= 5.0 && element <= 6.9) { console.log('Conceito C') }
      else if (element >= 7.0 && element <= 8.9) { console.log('Conceito B') }
      else if (element >= 9.0 && element <= 10.0) { console.log('Conceito A') }
      else (console.log('Nota Invalida'))
   });

}

conceitoNota(notas)