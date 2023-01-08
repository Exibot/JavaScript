// Trabajando con Objetos
const personas = {
    id: 1,
    name: 'John Doe',
    age: 30,
    isDeveloper: true,
    favoriteBook: ["Lord of the Rings", "Harry Potter", "The Hitchhiker's Guide to the Galaxy"],
}

console.log(personas.id)
const prop = "isDeveloper"
console.log(personas[prop])

const movies = [
    {
        id: 2,
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        genre: 'Fantasy',
        rating: 4.5
    },
    {
        id: 3,
        title: 'Harry Potter',
        genre: 'Adventure',
        rating: 4.0
    },
    {
        id: 4,
        title: 'The Lord of the Rings',
        genre: 'Fantasy',
        rating: 3.5
    }
]

console.log(movies)

const movie = movies[0]
console.log(movie)

const movie2 = movies[1]

console.log(movie2)

const sortMovies = movies.sort((a, b)=> a.title - b.title )

console.log(sortMovies)