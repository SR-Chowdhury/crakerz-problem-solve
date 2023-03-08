/**
 * Show me the books [done]
 */

const findBooks = (arrOfBooks) => {
    
    return arrOfBooks.filter(element => {
        if (element.year > 2000) {
            return arrOfBooks;
        }
    });
}

const arrOfBooks = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },

    {
        title: 'Harry Potter and the Philosopher Stone',
        author: 'J.K. Rowling',
        year: 1997
    },

    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        year: 2008
    }
]

console.log(findBooks(arrOfBooks));