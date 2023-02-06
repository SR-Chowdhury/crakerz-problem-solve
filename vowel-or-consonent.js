/**
 * Detect vowel and consonent: [done]
 */

const solution = (letter)=> {
    switch (letter) {
        case 'a':
            return 'VOWEL';
            break;
        case 'e':
            return 'VOWEL';
            break;
        case 'i':
            return 'VOWEL';
            break;
        case 'o':
            return 'VOWEL';
            break;
        case 'u':
            return 'VOWEL';
            break;
        default:
            return 'CONSONANT';
            break;
    }
};

var result = solution('b');
console.log(result);