const arreglo = ["Madrid", "Santiago", "Buenos Aires"]

const ciudad = arreglo.forEach(ciudad => {ciudad.startsWith("M")})
console.log(ciudad)

const ciudades = arreglo.map((ciudad, index) => `${index + 1}. ${ciudad}`)

console.log(ciudades)

const objeto = [
    {
        id: 1,
        nombre: "Alfonso",
        email: "alfonso@alfonso.com",
        password: "123456",
        age: 18

    },
    {
        id: 2,
        nombre: "Bonito",
        email: "bonito@bonito.com",
        password: "123456",
        age: 25
    },
    {
        id: 3,
        nombre: "Charlie",
        email: "charlie@charlie.com",
        password: "123456",
        age: 36
    }
]

const personasMayores = objeto.filter(objeto => objeto.age > 18)

console.log(personasMayores)

// reduce

