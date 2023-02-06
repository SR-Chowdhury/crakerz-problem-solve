/** 
 * Count the number of all zero : [done]
*/ 

function countZeros(binary_num) {
    // var x = binary_num.includes('0');
    let sum = 0;
    for (let i = 0; i < binary_num.length; i ++) {
        // console.log(binary_num[i]);
        if (binary_num[i] == '0') {
            sum++;
        }
    }
    return sum;
}

var result = countZeros('10101');
console.log(result);