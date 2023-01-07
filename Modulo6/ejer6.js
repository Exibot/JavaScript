const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array)

array.sort((a, b) => a - b)

console.log(array)

console.log(array.some(valor => valor > 10))

const personas = [
    { name: 'John', age: 30 },
    { name: 'Maria', age: 25 },
    { name: 'Pedro', age: 20 },
    { name: 'Sandra', age: 25 },
    { name: 'Enrique', age: 30 }
]

const existePersona = personas.some(persona => persona.name === 'Enrique')
console.log(existePersona)

const keys = Object.keys(personas)

const arr_keys = Array.from(keys)

console.log(arr_keys)
;