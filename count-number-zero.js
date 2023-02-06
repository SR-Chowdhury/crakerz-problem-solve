/** 
 * Count the number of all zero : [X]
*/ 

function countZeros(binary_num) {
    var x = binary_num.includes('0');
    // console.log(binary_num);
    return x;
}

var result = countZeros('10101');
console.log(result);