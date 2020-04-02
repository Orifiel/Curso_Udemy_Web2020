let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false
comparaComThis(obj) //true


let comparaComThisArr = param => console.log(this === param)
comparaComThisArr(global) //false
comparaComThisArr(module.exports)
comparaComThisArr(this)

comparaComThisArr = comparaComThisArr.bind(obj)
comparaComThisArr(obj)
comparaComThisArr(module.exports)
