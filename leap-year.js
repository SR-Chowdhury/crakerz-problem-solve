/**
 * Can you find the leap years?? : done
 */

function findLeapYear(arrOfYears) {
    let leapYear = [];
    for (let i=0; i<arrOfYears.length; i++) {
        if ((arrOfYears[i] %4 == 0 && arrOfYears[i] % 100 !=0) || arrOfYears[i] % 400 == 0) {
            leapYear.push(arrOfYears[i]);
        }
    }
    return leapYear;
}
var x = [2023,2024,2025,2028,2030];
var result = findLeapYear (x);
console.log(result);