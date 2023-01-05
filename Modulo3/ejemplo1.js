let saldo = 500
let efectivo = 500

if (saldo > efectivo) {
    console.log("Usted tiene saldo para sacar dinero")
}else{
    console.log("Usted no tiene saldo para sacar dinero")
}

switch (true) {
    case efectivo < 200:
        console.log(`Usted tiene no tiene efectivo suficiente: ${efectivo}`);
        break;
    case efectivo > 200:
        console.log(`Usted tiene ${efectivo}`);
        break;
    default:
        console.log("Usted no tiene saldo");
        break;
}
    
