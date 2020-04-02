const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

/**como o let possui escopo de bloco, é possível obtermos o exato valor de i nas condições que colocamos 
 * 2 e 8 no exemplo. Ao contrario do exemplo anterior que usando o var ele entrega o valor final do i. 
 */