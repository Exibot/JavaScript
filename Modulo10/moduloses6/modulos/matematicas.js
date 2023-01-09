export function suma (a, b){
    return a + b;
}

export function multiplica(a,b){
    return a * b;
}

export function eleva(a,b){
    return a**b
}

export function factorial(a){
    let facto = 1
    for(let i = 2; i <= a; i++){
        facto = facto * i
    }
    return facto
}