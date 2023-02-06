/**
 * Is it Isosceles?? : [done] 
 */

function checkTriangle(side1, side2, side3) {
    if (side1 == side2 && side2 != side3) {
        return 'Yes';
    }
    else if (side1 == side3 && side1 != side2) {
        return 'Yes';
    }
    else if (side2 == side3 && side1 != side2) {
        return 'Yes';
    }
    else {
        return 'No';
    }
}

var result = checkTriangle(9, 8, 9);
console.log(result);