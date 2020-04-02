const nums = [1,2,3,4,5,6,7,8,9,10]


//usando o break para interromper o fluxo de repetição
for (let num in nums) {
    if (num == 5) {
        break
    }
    console.log(`${num} = ${nums[num]}`)
}

//Utilizando o Continue para saltar uma etapa do fluxo de repetição

for (let num in nums) {
    if (num == 5) {
        continue
    }
    console.log(`${num} = ${nums[num]}`)
}
//Usando rotulos para ancorar o break
externo:for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par  = ${a},${b}`)
    }
}

console.log('Fim')