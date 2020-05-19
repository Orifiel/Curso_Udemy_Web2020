//operador ... rest (juntar)/spread(espalhar)



const funcionario = { nome: 'Maria', salario: 1234.56 }
const clone = { ativo: true, ...funcionario}
console.log(clone)


const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)