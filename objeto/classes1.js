class Lançamento {
   constructor(nome = 'genercio', valor = 0){
      this.nome = nome
      this.valor = valor
   }
} 


class CicloFinanceiro {
   constructor(mes,ano) {
      this.mes = mes
      this.ano = ano
      this.lançamentos = []
   }
   addLançamentos(...lançamentos){
      lançamentos.forEach(l => this.lançamentos.push(l))
   }

   sumario() {
      let valorConsolidado = 0
      this.lançamentos.forEach(l => {
         valorConsolidado += l.valor
      })
      return valorConsolidado
   }
}

const salario = new Lançamento('Salario', 2400)
const contaDeLuz = new Lançamento('Luz',-220)

const contas = new CicloFinanceiro(6,2018)
contas.addLançamentos(salario, contaDeLuz)
console.log(contas.sumario())