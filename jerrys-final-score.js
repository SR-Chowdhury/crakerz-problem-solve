/**
 * What is Jerry’s final score? : done
 */

function finalScore ( scores ) {
    let sum = 0;
    for (let i = 0; i< scores.length; i++) {
        sum += scores[i];
    };
    return sum;
}

var arr = [20, 13, 37];
var result = finalScore(arr);
console.log(result);