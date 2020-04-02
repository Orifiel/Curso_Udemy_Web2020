/*12) Faça um algoritmo que calcule o fatorial de um número.*/

let fatorando = (num) => {
    let cont = num
    let total = 1
    while (cont > 0) {
        total *= cont
        cont--
    }
    console.log(total)
}

fatorando(5)