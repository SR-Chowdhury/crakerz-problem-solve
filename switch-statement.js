/**
 * Conditional Statements: Switch : [X]
 */

function getLetter(s) {
    let letter;
    s = s.toLowerCase();

    for (let i = 0; i < s.length; i ++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') 
        {
            return 'A';
        } 
        else if (s[i] == 'b' || s[i] == 'c' || s[i] == 'd' || s[i] == 'f' || s[i] == 'g') 
        {
            return 'B';
        } 
        else if (s[i] == 'h' || s[i] == 'j' || s[i] == 'k' || s[i] == 'l' || s[i] == 'm') 
        {
            return 'C';
        }
        else {
            return 'D';
        }
    }
    return letter;
}

var result = getLetter ('adfgt');
console.log(result);
