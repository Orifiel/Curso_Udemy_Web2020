const valor = 'Global'

function minhafuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhafuncao()
    
}

exec()


/*Apesar da função exec ter a variavel valor, durante a sua execução em que chama a 'minhafuncao'
buscará o valor global, pois devido o valor lexico, a função irá respeitar o contexto onde a variavel esta 
declada. Basicamente, pela função nminhafuncao não ter uma variavel chamada valor, ele irá buscar 
na área global o conteudo dessa variavel. Ignorando a variavel valor dentro da função exec*/

