const datosPersonales = {
    nombre: 'enrique',
    apellido: 'altamirano',
    edad: 36,
    altura: 1.74,
    eresDesarrollador: true
}

const edad = datosPersonales.edad
console.log(edad)

const datosPersonales2 = {... datosPersonales}
console.log(datosPersonales2)

const datosPersonalesIsmael = {
    nombre: 'ismael',
    apellido: 'Saavedra',
    edad: 39,
    altura: 1.8,
    eresDesarrollador: false
}

const datosPersonalesMarmo = {
    nombre:'marmo',
    apellido: 'Santa',
    edad: 37,
    altura: 1.8,
}

const listaDeAmigos = [datosPersonales, datosPersonalesIsmael, datosPersonalesMarmo]
console.log(listaDeAmigos)
datosPersonales3 = listaDeAmigos.sort((a, b) => a.edad - b.edad)
console.log(datosPersonales3)