const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: 
        case 9: 
            console.log('Quadro de Honra')
        break 
//para que seja executado apenas um case atendendo a condição
        case 8: case 7:
            console.log('Aprovado')
        break
            case 6: case 5:
            console.log("Recuperação")    
        break
        default:
            console.log("Reprovado")
        }
}


imprimirResultado(9.4)
imprimirResultado(8.4)
imprimirResultado(6.2)
imprimirResultado(5.1)
imprimirResultado(3)