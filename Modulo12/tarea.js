function fibonacci(number){
    let arregloNumeros = [1]
    for(let i = 1; i < number ; i++){
        if(i<=2){
            arregloNumeros = [...arregloNumeros, i]
        }
        else{
            arregloNumeros = [...arregloNumeros, arregloNumeros[i-2] + arregloNumeros[i-1]]
        }
    }
    return arregloNumeros
} 

console.log(fibonacci(6))