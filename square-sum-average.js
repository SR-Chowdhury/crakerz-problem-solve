/**
 * Square, Sum and Average [done]
 */

const calculate = (arrOfNumbers) => {
    const square = arrOfNumbers.map(element =>  element * element);
    let sum = 0;
    const add = square.map(element => sum += element);
    return sum / arrOfNumbers.length;
    
}

const arrOfNumbers = [4, 6, 10, 12];
console.log(calculate(arrOfNumbers));