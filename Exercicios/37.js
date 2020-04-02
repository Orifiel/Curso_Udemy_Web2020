/** 37) Escreva duas funções, uma para progressão aritmética e uma
 para progressão geométrica que recebam como parâmetros um número n
(número de termo), a1 (o primeiro termo) e r (a razão) e
escreva os n termos, bem como a soma dos elementos. */

function progA (Nt, A1, R){
    let total = 0
    let progress = []
    PA = A1
   for (let i = 1; i <= Nt; i++ ){

    if (i === 1) { 
        progress.push(PA) 
    } else { 
        PA += R
        progress.push(PA) 
    }    
    
}
    total = progress.reduce((total, numero) =>  total + numero,0) 
    return [progress, `Total:${total}`]
}

console.log(progA(5,2,2))

/**================================================= */

function progG (Nt, A1, R){
    let total = 0
    let progress = []
    PG = A1
   for (let i = 1; i <= Nt; i++ ){

    if (i === 1) { 
        progress.push(PG) 
    } else { 
        PG *= R
        progress.push(PG) 
    }    
    
}
    total = progress.reduce((total,numero) => total + numero,0)
    return [progress,`Total:${total}`]
}

console.log(progG(5,1,5))
