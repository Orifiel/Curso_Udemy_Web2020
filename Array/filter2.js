Array.prototype.filter2 = function(callback) {
   const arr = []
   for ( let i = 0; i < this.length; i++) {
      if(callback(this[i],i,this)) {
         arr.push(this[i])
      }
   }
   return arr
}


const produtos = [
   { nome: 'Notebook', preco: 2499, fragil: true},
   { nome: 'Ipad Pro', preco: 4199, fragil: true},
   { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
   { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const maisCaro = produto => produto.preco > 500

const fragil = produto => produto.fragil



console.log(produtos.filter2(maisCaro).filter2(fragil))