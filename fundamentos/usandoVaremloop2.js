const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()


/**Devido o var não ter um escopo de bloco, o (i) tomará o valor final da condição (10) */