class Avo {
   constructor(sobrenome){
      this.sobrenome = 'Mattos'
   }
}

class Pai extends Avo {
   constructor(sobrenome, profissao = "Comerciante"){
      super(sobrenome)
      this.profissao = profissao
      
   }
}

class Filho extends Pai {
      constructor(){
      super('Mattos')
   }
}

const filho = new Filho 
filho.nome = 'Cleiton'
filho.idade = 33

const pai = new Pai
pai.nome = 'Suliva F'
pai.idade = 49

console.log(pai)