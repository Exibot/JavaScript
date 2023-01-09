class Persona{

    _name;
    _age;

    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    getName(){
        return this._name;
    }

    getAge(){
        return this._age;
    }

    setName(name){
        this._name = name;
    }

    setAge(age){
        this._age = age;
    }

    saludo(){
        return `Hola soy ${this._name} tengo ${this._age}`;
    }
}

class Developer extends Persona{
    
    constructor(name, age, programming_language){
        super(name, age);
        this.programming_language = programming_language;
    }

    getProgrammingLanguage(){
        return this.programming_language;
    }

    saludo(){
        return `${super.saludo()} y soy desarrollador en ${this.programming_language}`;
    }
}

let enrique = new Developer("Enrique", 30, "ruby");

console.log(enrique.getAge())
console.log(enrique.getProgrammingLanguage())

enrique.setAge(40);
console.log(enrique.getAge())

console.log(enrique.saludo())


