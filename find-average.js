/**
 * Find the average : [done]
 */
function average(arrOfMarks) {

    let sum = 0, avg, roundUp;
    for (let i = 0; i< arrOfMarks.length; i++) {
        sum += arrOfMarks[i];
    }

    avg = sum / arrOfMarks.length;
    roundUp = avg.toFixed(2);
    // console.log(typeof parseFloat(roundUp));
    return parseFloat(roundUp);
}

var arrOfMarks = [100, 100, 100, 100, 100];
var result = average(arrOfMarks);
console.log(result);