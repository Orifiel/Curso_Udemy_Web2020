/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function dividaSobra (a,b) {
    let total = a / b
    let resto = a % b
    return console.log(total.toFixed(2), resto)
}

dividaSobra(10,3)