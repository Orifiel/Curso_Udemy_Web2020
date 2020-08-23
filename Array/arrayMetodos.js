const pilotos =['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //exclui o ultimo elemento do array

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //exclui o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar ou remover elementos

// adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) //remove 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)