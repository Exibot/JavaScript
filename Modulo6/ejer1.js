let miArreglo = [1,2,3, {nombre: "enrique"}]

console.log(miArreglo)
console.log(miArreglo[3])
miArreglo.push("Valor Final")

console.log(miArreglo)
miArreglo.unshift("inicio")
console.log(miArreglo)

miArreglo.pop()

console.log(miArreglo)

miArreglo.shift()

console.log(miArreglo)

miArreglo.splice(1,2)

console.log(miArreglo)

miArreglo.splice(3,0,"Hola")

console.log(miArreglo)