/**34 - Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function verifyString (nome1, nome2){
    let contem = true
    for (let i = 0; i < nome1.length; i++) {
        let letra1 = nome1.charAt(i).toLowerCase()
        for (let j = 0; j < nome2.length; j++) {
            let letra2 = nome2.charAt(j).toLowerCase()
            if (letra1 == letra2) {
                contem = true
                break
            } else {
                contem = false
            }           
        }
        if (!contem) {
            return contem
        }
    }
    return contem
}

console.log(verifyString('Cleiton','Matheus'))