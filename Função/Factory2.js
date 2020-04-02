criarPessoa = (name, age, genere) => {
    
    return {
        name,
        age,
        genere
    }
}

console.log(criarPessoa('Cleiton', 32, 'Masc'))
console.log(criarPessoa('Mariana', 35, 'Fem'))
console.log(criarPessoa('Nicolas', 3, 'Masc'))
console.log(criarPessoa('Matheus', 0, 'Masc'))

