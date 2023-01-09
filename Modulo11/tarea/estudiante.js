class Estudiante{
    _nombre
    _asignatura = ['Javascript', 'HTML', 'CSS']

    constructor(nombre){
        this._nombre = nombre;
    }

    get datos(){
        return `Mi nombre es ${this._nombre} y estoy aprendiendo ${this._asignatura}`
    }

}

let estudiante = new Estudiante('Juan');

console.log(estudiante.datos);