const listaDeCompra = ["aceite", "arroz", "pasta","pollo"]
listaDeCompra.push("Aceite de Girasol");
listaDeCompra.pop()
console.log(listaDeCompra);

const movies = [
    {
        id: 1,
        title: "The Shining",
        description: "The Shining is a fictional character in the family Rosacea",
        year: 1994,
        director: "Michael Jordan"

    },
    {
        id: 2,
        title: "Alien",
        description: "Alien is a fictional superhero appearing in American comic books",
        year: 1996,
        director: "Mich"

    },
    {
        id: 3,
        title: "The Hobbit",
        description: "The Hobbit is a fictional superhero appearing in American",
        year: 2000,
        director: "el mejor"
    },
    {
        id: 4,
        title: "The Godfather",
        description: "The Godfather is a fictional superhero appearing in American",
        year: 2006,
        director: "pepito"
    },
    {
        id: 5,
        title: "Star Wars",
        description: "Star Wars is a fictional superhero appearing in American",
        year: 1989,
        director: "astonok",
    },
    {
        id: 6,
        title: "A New Hope",
        description: "A New Hope is a fictional superhero appearing in American",
        year: 2018,
        director: "anonimo",
    }
]

const new_movies = movies.filter((movie) => movie.year >= 2010)

//console.log(movies);
//console.log(new_movies);
const directores = movies.map(movie => movie.director)
const titulos = movies.map(movie => movie.title)
const dict_titles = directores.concat(titulos)
const dict_titles_prop = [...directores, ...titulos]
console.log(dict_titles_prop);
