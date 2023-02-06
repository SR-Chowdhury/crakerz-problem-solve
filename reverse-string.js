/**
 * Reverse The String : [done]
 */

const reverseMaker = (word)=> {
    console.log(word);
    let element = '';
    for (let i = word.length - 1; i >=0; i--) {
        element += word[i];
    }
    return element;
};

var result = reverseMaker ("GeeksforGeeks");
console.log(result);