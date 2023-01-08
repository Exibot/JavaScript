const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const miSet = new Set(array)
console.log(miSet)

miSet.add(10)
console.log(miSet)

miSet.delete(10)
console.log(miSet)


miSet.forEach((valor) => {console.log(valor)})

console.log(miSet.has(9))
