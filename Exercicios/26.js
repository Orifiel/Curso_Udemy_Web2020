//**26) Fazer um programa para encontrar todos os pares entre 1 e 100 */

const seusPares = () => {
    let arr = []
    for (let i = 1; i <= 100; i++){
        if ( i % 2 == 0 ){
            arr.push(i)
        }
        
    }
    console.log(arr)
}

seusPares()