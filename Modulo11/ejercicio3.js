class Persona{
    #name;
    #age;

    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    getName(){
        return this.#name;
    }

    setName(newName){
        this.#name = newName;
    }

}

let john = new Persona("John", 30);
console.log(john.getName());
john.setName("Enrique")
console.log(john.getName());

