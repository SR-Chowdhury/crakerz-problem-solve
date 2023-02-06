/**
 * Write a code to find the smallest element of the array: [done]
 */

function findingSmallest(numbers) {
    var smallNumber = numbers[0];
    for (let i = 1; i< numbers.length; i ++) {
        if (smallNumber > numbers[i]) {
            smallNumber = numbers[i];
        }
    }
    return smallNumber;
}

var arr = [10,33,5,99,6];
var result = findingSmallest(arr);
console.log(result);