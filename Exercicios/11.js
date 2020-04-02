/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false */

function bissexto (data){    
    if (data % 400 == 0 || data % 4 == 0 && data % 100 != 0 ){  
        
            return console.log(`${data} é ano bissexto`)
        }
     else {  return console.log(`${data} não é um ano bissexto`)}
    }

bissexto(2004)
bissexto(1500)
bissexto(1968)
