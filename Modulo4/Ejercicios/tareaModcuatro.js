let nombre = "Enrique"
let apellido = "Altamirano"
let estudiante = nombre + " " + apellido
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)
let estudianteMinus = estudiante.toLowerCase()
console.log( estudianteMinus )
let largo = estudiante.length
console.log(largo)
let primeraLetra = nombre.charAt(0)
console.log(primeraLetra)
let ultimaLetra = estudiante.charAt(largo -1)
console.log(ultimaLetra)
let sinEspacios = estudiante.replace(/\s+/g,'')
console.log(sinEspacios)
let contiene = estudiante.includes(nombre)
console.log(contiene)