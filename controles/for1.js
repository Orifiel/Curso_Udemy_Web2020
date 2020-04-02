let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 1; i <=10; i++) {
    console.log(`Contador = ${i}`)
}

let notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for ( let i=0; i < notas.length; i++ ) {
    
        if (notas[i] > 7.5 && notas[i] < 7.9) {
            notas[i] = Math.ceil(notas[i])
        }else if ( notas[i] > 6.1 && notas[i] < 6.99){
            notas[i] = Math.ceil(notas[i])
        }
        console.log(`NOTA: ${notas[i]}`)
    
   
}