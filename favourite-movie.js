/**
 * My favourite movie [done]
 */

const findTheMovie = (movieTitle, movieYear, arrOfMovies) => {
    //write your code here
    return arrOfMovies.find(element => {
        if (element.title === movieTitle && element.year === movieYear) {
            return arrOfMovies;
        }
    });
    //don't forget to write return
}

const arrOfObj = [
    {
        title: 'Star Wars',
        director: 'George Lucas',
        year: 1977
    },

    {
        title: 'The  Dark Knight',
        director: 'Christopher Nolan',
        year: 2008
    }
]

console.log(findTheMovie('The  Dark Knight', 2008, arrOfObj));