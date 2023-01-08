// funciones flechas y anonimas
const number = [1,2,3,4,5,655,34,5435,435]

const number2 = number.map((valor) => valor*2)
console.log(number2)

const dobleValor = valor => valor * 2
console.log(dobleValor(6))

const number3 = number.map(dobleValor)
console.log(number3)