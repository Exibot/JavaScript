//funciones generadoras

function* generaId(){
    let id = 0;
    while(true){
        id++;
        if (id === 10){
            return id;
        }
        yield id // este campo espera a una llamada nueva
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)