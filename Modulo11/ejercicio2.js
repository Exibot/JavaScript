class Persona{
    #nombre
    #edad
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    saludo(){
        console.log(`Hola como estás ${this.name} tu tienes ${this.age}`);
    }

    getName(){
        return this.name;
    }
}

const enrique = new Persona("Enrique", 36);
console.log(enrique)
console.log(enrique.getName())

