/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function Saque(valorSaque) {
    let cont100 = 0
    let cont50 = 0
    let cont10 = 0
    let cont5 = 0
    let cont1 = 0
    let ValorNota = CalcValorNota(valorSaque)
    while (valorSaque >= ValorNota){
        switch (ValorNota){
            case 100:
                valorSaque = valorSaque - 100
                cont100++
                break
            case 50:
                valorSaque = valorSaque - 50
                cont50++
                break
            case 10:
                valorSaque = valorSaque - 10
                cont10++
                break
            case 5:
                valorSaque = valorSaque - 5
                cont5++
                break
            case 1:
                valorSaque = valorSaque - 1
                cont1++
                break

        }

        ValorNota = CalcValorNota(valorSaque)
    }
   return ImprimeResult(cont100,cont50,cont10,cont5,cont1)
}

function CalcValorNota(valorSaque) {
    if (valorSaque >= 100) {return 100}
    else if (valorSaque >= 50) {return 50}
    else if (valorSaque >= 10) {return 10}
    else if (valorSaque >= 5) {return 5}
    else if (valorSaque >= 1) {return 1}

}

function ImprimeResult(cont100,cont50,cont10,cont5,cont1){
    let resultado = ''
    if (cont100 > 0) { resultado += `São ${cont100} nota(s) de 100 `}
    if (cont50 > 0)  { resultado += `São ${cont50} nota(s) de 50 `}
    if (cont10 > 0)  { resultado += `São ${cont10} nota(s) de 10 `}
    if (cont5 > 0)  { resultado += `São ${cont5} nota(s) de 5`}
    if (cont1 > 0) { resultado += `São ${cont1} nota(s) de 1`}
    return resultado
}


console.log(Saque(72))

/**
 * CONSIDERAÇÕES
 *
 * Nesse exercício precisou criar uma função de "consulta" para poder setar os contadores e
 * fazer a degradação do valor até 0 para chegar no valor final.
 *
 * Quando obtido um valor de saque, ele compara com uma função se ele é maior que
 * um valor de nota ex
 *
 * 32 é maior que 100 = não
 * 32 é maior que 50 = não
 * 32 é maior que 10 = sim
 *
 * nesse ponto a função retorna que o valor da nota é de 10 jogando essa informação para ser
 * validada na primeira função onde compara-se:
 *
 * enquanto valor do saque > =  valor da nota
 *      verifica valor da nota:
 *      caso o valor seja 10 então
 *      valor do saque é reduzido em 10
 *      e um contador de 10 é adicionado +1
 *
 * feito isso, ele verifica qual o valor da nota utilizando a função de consulta de novo.
 *
 * valor de saque agora é 22
 *
 * 22 é maior que 100 não
 * 22 é maior que 50 naõ
 * 22 é maior que 10 sim então retorna 10
 *
 * esse 10 volta como valor de nota é entra na condicional
 *
 * enquanto valor de saque > = valor de nota
 *      verifica valor de nota
 *      caso o valor seja 10 então
 *      valor do saque é reduzido em 10 (agora valendo 12)
 *      e o contador 10 recebe +1 (aqui já com dois marcadores.
 *
 * é interrompido o comando switch, e é solicitado novamente o valor de nota,
 *
 * 12 é maior que 100 não
 * 12 é maior que 50 naõ
 * 12 é maior que 10 sim então retorna 10
 *
 * e todo o processo acontece novamente, após a proxima dedução,
 * o valor de saque ficara menor que o valor da nota novamente,
 * sendo necessário consultar qual sera o novo valor de nota
 *
 * 02 é maior que 100 não
 * 02 é maior que 50 naõ
 * 02 é maior que 10 não
 * 02 é maior que 5 não
 * 02 é maior que 1 sim, então retorna 1
 *
 *  enquanto valor de saque > = valor de nota
 *      verifica valor de nota
 *      caso o valor seja 1 então
 *      valor do saque é reduzido em 1 (agora valendo 1)
 *      e o contador 1 recebe +1
 *
 * o processo sera repetido novamente, ao ponto que valor de saque será zero ou seja
 * menor que valor de nota, sem ter mais condições de buscar novos valores para nota.
 *
 * A função saque então retorna no final, o resultado da função que exibe a quantidade de conta-
 * dores, validando se há valores neles (maiores que zero)
 *
 * E assim, imprimindo na tela a quantidade necessária para entregar os valores.
 *
 */
