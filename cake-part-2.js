/**
 * Delecious Cake part II [done]
 */

function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {

    if (marksOfJim > marksOfDela) {
        if (marksOfJim > marksOfChinku) {
            return 'Jim';
        } else {
            return 'Chinku';
        }
    } else {
        if (marksOfDela > marksOfChinku) {
            return 'Dela';
        } else {
            return 'Chinku';
        }
    }
}

var winner = JimOrDelaOrChinku(84, 99, 77);
console.log(winner);