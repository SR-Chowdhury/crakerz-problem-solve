/**
 * Find the second largest: [X]
 */

function secondLargest ( numbers ) {
    let heigh1 = 0, heigh2 = 0;
    for (let i = 0; i< numbers.length; i ++) {
        if (numbers[i] > heigh1) {
            heigh2 = heigh1;
            heigh1 = numbers[i];
        } else if (numbers[i] > heigh2) {
            heigh2 = numbers[i];
        }
    }

    return heigh2; 

}

var arr = [10,33,5,13,99,6,87];
console.log(secondLargest(arr));