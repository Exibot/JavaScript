//Gestion de errores con throw

const miFuncion = val => {
    if (typeof val === 'number') {
        return 2 *  val
    }
    throw new Error(val)
}


try {
    console.log(miFuncion('holita'))
} catch (e) {
    console.error(`${e} (la variable debe ser de tipo entero)`)
}


