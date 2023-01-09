class Persona {
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola mi nombre es: ${this.nombre} tengo ${this.edad} años`)
    }
}

const enrique = new Persona ('enrique', 36, true)

console.log(enrique)

enrique.saludo()