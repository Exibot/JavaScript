//funciones asincronas

function miAsinc(){

}

// Promesas

const promesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
})

//consumo de la promesa
promesa
    .then(() => console.log("se ha llamado a la promesa de forma correcta")) // captura el resultado de realizar con exito la promesa
    .catch(() => console.log("No se ha podido realizar con exito la promesa")) // captura el resultado de realizar sin exito la promesa
    .finally(() => console.log("Siempre estoy")) // Siempre se ejecuta independiente de si hay exito o error en la promesa