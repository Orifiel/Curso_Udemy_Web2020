let aprovados = new Array ('Bia','Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Cleiton', 'Samanta', 'Sulivan']
console.log(aprovados)

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Natalia'
aprovados.push('Nicolas')

console.log(aprovados)
aprovados.sort()
console.log(aprovados.length)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Cleiton', 'Samanta', 'Sulivan']
aprovados.splice(1,2)
console.log(aprovados)
