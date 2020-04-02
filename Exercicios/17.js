/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

atualizaSalario = (salario, plano) => {
    switch(plano.toUpperCase()){
        case "A":
            
            console.log(`o salario de ${salario} recebéra 10% de acrescimo. Valor atualizado conforme plano A: ${salario*1.10}`)
        break
        case "B":
            
            console.log(`o salario de ${salario} recebéra 15% de acrescimo. Valor atualizado conforme plano A: ${salario*1.15}`)    
        break
        case "C":
            
            console.log(`o salario de ${salario} recebéra 20% de acrescimo. Valor atualizado conforme plano A: ${salario*1.20}`)   
        break
        default:
            console.log(`${salario} não sofre aumento. ${plano.toUpperCase()} não é uma policitica de aumento salarial.`)

    }


}



atualizaSalario(1000.00, "b")
atualizaSalario(1800.00, "A")
atualizaSalario(1600.00, "C")
atualizaSalario(2400.00, "f")
