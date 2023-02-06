/**
 * Find the largest number: [done]
 */

function findMax(arr){
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i ++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i];
        } 
    }
    return maxValue;
}

console.log(findMax([55,10,95]));