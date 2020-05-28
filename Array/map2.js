const carrinho = [
   '{ "nome": "Borracha", "preco": 3.45 }',
   '{ "nome": "Caderno", "preco": 13.90 }',
   '{ "nome": "Kit de Lapis", "preco": 41.22 }',
   '{ "nome": "Caneta", "preco": 7.50 }',
]

//retornar um array apenas com os preços

let valores = carrinho.map(function(e){
   this.e = JSON.parse(e)
   return this.e.preco
})

console.log(valores)
