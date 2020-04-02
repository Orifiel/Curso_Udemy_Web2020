function soBoaNoticia(nota) {
  if(nota >=7){
    console.log('Aprovado com '+ nota)
  }else {
    console.log('Reprovado')
  }
}

soBoaNoticia(8.1)
soBoaNoticia(6.3)
 

function seForVerdade(valor) {
  if (valor) {
    console.log('É Verdade... ' + valor)
  }
}

seForVerdade() //false
seForVerdade(null) //false
seForVerdade(undefined) //false
seForVerdade(NaN) //false
seForVerdade('') //false
seForVerdade(0) //false
seForVerdade(-1) //true
seForVerdade([]) //true
seForVerdade({}) //true
