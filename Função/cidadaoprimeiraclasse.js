//função em js é first-class Object (Citizens)
//Higher-order function


//criar função de forma literal

function fun1() {

 }

 //função em uma variavel

 const fun2 = function() { 

 }

 //armazernar a função em um array

 const arr = [function (a,b) {return a + b }, fun1, fun2]
 console.log(arr[0](2,3))

 // armazenar em um atributo de objeto

 const obj = {}
 obj.falar = function() {return "Ola"}
 console.log(obj.falar())

 //Passar função como parametro

function run (fun) {
    fun()
}

run (function () { console.log('Exec...' ) })

// uma função pode retornar ou conter uma função

function soma(a,b) { //utilizando dois, dos paramentros passados
    return function (c) { //utilizando o terceiro parametro tardiamente. 
        console.log(a + b + c)
    }
}

soma(2,3)(4) //tres paramentros inseridos na chamada

// ou podemos armazenar o resultado da primeira função em uma variavel e usa-la chamando-a função com 
//um novo paramentro

const cincomais = soma(2,3)
cincomais(4)