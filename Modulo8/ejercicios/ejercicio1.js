function verdadera(){
    return true
}

console.log(verdadera())

const tiempo = new Promise((resolve, reject) => {
    if(true){
        resolve();
    }else{
        reject();
    }
})

tiempo
    .then(() => setTimeout(() => {console.log("Hola, soy una promesa")}, "5000"))
    .catch(() => console.log("Se produjo un error en la promesa"))

function* pares(){
    for(let i = 0; i < 100; i++){
        if(i%2 === 0){
            yield i
        }
    }
}

const numerosPar = pares()

console.log(numerosPar.next().value)
console.log(numerosPar.next().value)
console.log(numerosPar.next().value)
console.log(numerosPar.next().value)
console.log(numerosPar.next().value)