const sequencia = {
   /**convenção que diz que variaveis iniciadas por 
    *  "-"(underline) são variaveis destinadas a serem usadas somente internamente do sistema.
    */
   _valor: 1, 
   get valor() { return this._valor++ },
   set valor(valor) { 
      if (valor > this._valor){
         this._valor = valor
      }
   }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)