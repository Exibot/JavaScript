// iteracion sobre una lista

const arregloUno = [1,2,3,4,5,34654654,"hola", true]
console.log(arregloUno)

for (let index = 0; index < arregloUno.length; index++) {
    const element = arregloUno[index];
    console.log(element)
}

arregloUno.forEach(element => {
    console.log(element)
});


const variableEncontrada = arregloUno.find(elemento =>{
    if(elemento === 34654654){
        return true;
    }
})

console.log(variableEncontrada)

//  Busqueda de un objeto en un arreglo

const objeto = [
    {
        id: 1,
        nombre: "Alfonso",
        email: "alfonso@alfonso.com",
        password: "123456",
    },
    {
        id: 2,
        nombre: "Bonito",
        email: "bonito@bonito.com",
        password: "123456",
    },
    {
        id: 3,
        nombre: "Charlie",
        email: "charlie@charlie.com",
        password: "123456",
    }
]

const persona = objeto.find(elemento => elemento.nombre === "Alfonso")

console.log(persona)

const { password } = objeto.find(elemento => elemento.nombre ==="Charlie" )

console.log(password)