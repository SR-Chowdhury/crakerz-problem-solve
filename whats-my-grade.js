/**
 * What's my grade??: [done]
 */

function findGrade(marks){
    if (marks >= 80) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 50) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(findGrade(70));