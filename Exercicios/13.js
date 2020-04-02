/**13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch */

classifDay = (num) => {
    switch(num) {
        case 1:
        console.log("Fim de Semana (Domingo)")
        break;
        case 2:console.log("É dia útil (Segunda-feira)")
        break;
        case 3:console.log("É dia útil (Terça-Feira)")
        break;
        case 4:console.log("É dia útil (Quarta-feira)")
        break;
        case 5:console.log("É dia útil (Quinta-feira)")
        break;
        case 6:
        console.log("É dia útil (Sexta-feira)")
        break;
        case 7:
        console.log("Fim de Semana (Sabado)")
        break;
        default:
        console.log("Não é um dia valida")
            
    }

}

classifDay(2)
classifDay(3)
classifDay(7)