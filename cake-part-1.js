/**
 * Delecious Cake part I [done]
 */

function JimOrDela(marksOfJim, marksOfDela) {

    if (marksOfJim > marksOfDela) {
        return 'Jim';
    } else {
        return 'Dela';
    }
}

var winner = JimOrDela(84, 95);
console.log(winner);