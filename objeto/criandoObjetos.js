//usando a notação literal

const obj =  {
   nome: 'Cleiton',
   idade: 33
}

console.log(obj)

//Object em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object

console.log(obj2)

//função construtoras

function Produto(nome, preco, desc) {
   this.nome = nome
   this.getPrecoComDesconto = () => {
      return preco * (1 - desc)
   }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory

function criarFuncionario(nome, salario, faltas){
   return{
      nome, 
      salario,
      faltas,
      getsalario(){
         return (salario /30)*(30 - faltas)
      }
   }
}

const f1 = criarFuncionario('Cleiton', 2000, 2)
const f2 = criarFuncionario('Marina', 4200, 1)
console.log(f1.getsalario(), f2.getsalario())


//object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Obj

const fromJSON = JSON.parse('{"Info": "Sou um JSON"}')
console.log(fromJSON.info)

