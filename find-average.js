/**
 * Find the average : [X]
 */
function average(arrOfMarks) {

    var sum = 0, avg;
    for (let i = 0; i< arrOfMarks.length; i++) {
        sum+=arrOfMarks[i];
    }
    avg = sum / arrOfMarks.length;
    if(Number.isInteger(avg)) {
        return avg;
    }
    else {
        return avg.toFixed(2);
    }
}

var arrOfMarks = [100, 100, 100, 100, 100];
var result = average(arrOfMarks);
console.log(result);