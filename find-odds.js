/**
 * What are the odds?? : [done]
 */

function findOddSum(arrOfNumbers){
    let sum = 0;
    for (let i = 0; i< arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] %2 != 0) {
            sum+= arrOfNumbers[i];
        }
    }
    return sum;
}

var arr = [5, 7, 8, 10, 45, 30];
var result = findOddSum(arr);
console.log(result);