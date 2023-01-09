function suma (a, b){
    return a + b;
}

function multiplica(a,b){
    return a * b;
}

function eleva(a,b){
    return a**b
}

function factorial(a){
    let facto = 1
    for(let i = 2; i <= a; i++){
        facto = facto * i
    }
    return facto
}

module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}