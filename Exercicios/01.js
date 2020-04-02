/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

const operandos = (x, y) => {
    
    
        soma = x + y
        sub = x - y
        mult = x * y
        div = x / y
    
     console.log(`Somando ${x} e ${y} teremos ${soma}`)
     console.log(`Subtraindo ${x} e ${y} teremos ${sub}`)
     console.log(`Multiplicando ${x} e ${y} teremos ${mult}`)
     console.log(`Dividindo ${x} e ${y} teremos ${div}`)
     
}

operandos(4,2)