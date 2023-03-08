/**
 * Even Friends!! [done]
 */

const checkEvenLength = (arrOfFriends) => {
    return arrOfFriends.filter(element => {
        if (element.length %2 === 0) {
            return arrOfFriends;
        }
    });
}

const arrOfFriends = ['John', 'James', 'Jane', 'Ratul'];

console.log(checkEvenLength(arrOfFriends));