/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function CalcS (num1, operador, num2) {
    switch( operador ) {
    
    case "+":
        console.log(`Resultado ${num1 + num2}`)
    break
    case "-":
        console.log(`Resultado ${num1 - num2}`)
    break
    case "*":
        console.log(`Resultado ${num1 * num2}`)
    break
    case "/":
        console.log(`Resultado ${num1 / num2}`)
    break
    default:
        console.log("E R R O R: Tente novamente com um operador matemático valido")


    }

}

CalcS(2,"+",3) //5
CalcS(3,"-",2) //1
CalcS(3,"*",4) //12
CalcS(10,"/",2)//5
CalcS(2,"#",3) //erro
