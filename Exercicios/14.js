/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

temFruta = (fruta) => {
    switch (fruta.toLowerCase()) {
        case "maça":
        console.log("Não vendemos esta fruta")
        break
        case "maçã":
        console.log("Não vendemos esta fruta")
        break
        case "kiwi":
        console.log("Estamos com escassez de kiwis")
        break
        case "melancia":
        console.log("Aqui está, são 3 reais o kg")
        break
        case "melância":
        console.log("Aqui está, são 3 reais o kg")
        break
        default:
        console.log("E R R O R: insira uma opção valida")
    }
}

temFruta("maça")
temFruta("KIWI")
temFruta("MelÂncia")
temFruta("cenoura")
