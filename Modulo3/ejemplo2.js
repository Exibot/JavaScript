for (var i = 0; i < 3; i++) {
    console.log(` ${i}`);
}

let lista = [1, 2, 3, 4, 5];

for (var i = 0; i < lista.length; i++) {
    console.log(` ${lista[i]}`);
}

for (let value of lista) {
    console.log(` ${value}`);
}

lista.forEach(element => {
    console.log(element)
});

let persona = {
    name: "John",
    age: 30,
    height: 100,
    weight: 80,
    color: "red",
    birthday: new Date(),
    married: true
}

for (let key in persona) {
    console.log(persona[key]);

}