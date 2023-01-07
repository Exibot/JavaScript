
let arregloUno = [1,2,3,4,5,6, false, "hola sisis"]
let arregloDos = ['a','b','c','d']

console.log(arregloUno.concat(arregloDos))

let arregloTres = arregloUno.concat(arregloDos)

console.log( arregloUno )
console.log( arregloDos )

console.log(... arregloTres)

// factor de propagacion
let arregloCuatro = [...arregloUno, ...arregloDos]
console.log(arregloCuatro)

// Sin factor de propagacion
let arregloCinco = [arregloUno, arregloDos]
console.log(arregloCinco)