/**21) Criar um programa para identificar o valor a ser pago por um plano de saúde 
 * dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional
 * conforme a seguinte tabela: 1) crianças com menosde 10 anos pagam R$80; 2) conveniados
 * com idade entre 10 e 30 anos pagam R$50; 3) conveniados com idade acima de 30 e até 60
 * anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

 function custoSaude (idade){
     let ajuste = analisePerfil(idade)
     let valor
     switch (ajuste){
         case 1:
            valor = 100 + 80
            console.log(`O valor a ser pago é de R$${valor},00 reais no plano de saude.`)
         break
         case 2:
            valor = 100 + 50
            console.log(`O valor a ser pago é de R$${valor},00 reais no plano de saude.`)
         break
         case 3:
            valor = 100 + 95
            console.log(`O valor a ser pago é de R$${valor},00 reais no plano de saude.`)
         break
         case 4:
            valor = 100 + 130
            console.log(`O valor a ser pago é de R$${valor},00 reais no plano de saude.`)
         break
     }
    return
 }

 function analisePerfil(idade){
     if (idade < 10)  return 1
     if (idade >=10 && idade <= 30) return 2
     if (idade > 30 && idade <= 60) return 3
     if (idade > 60) return 4
 }

custoSaude(33)
custoSaude(3)
custoSaude(12)
custoSaude(88)


/**Considerações
 * Nesse exemplo, o exercício é similar, duas funções onde a primeira se serve dos dados para realizar
 * o comparativo no switch.
 * é verificado a idade
 */
