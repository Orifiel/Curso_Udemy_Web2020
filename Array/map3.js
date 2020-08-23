Array.prototype.map2 = function(callback) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this))
  }
  return arr
}


const carrinho = [
   '{ "nome": "Borracha", "preco": 3.45 }',
   '{ "nome": "Caderno", "preco": 13.90 }',
   '{ "nome": "Kit de Lapis", "preco": 41.22 }',
   '{ "nome": "Caneta", "preco": 7.50 }',
]

//retornar um array apenas com os preços

let valores = carrinho.map2(function(e){
   this.e = JSON.parse(e)
   return this.e.preco
})

console.log(valores)
