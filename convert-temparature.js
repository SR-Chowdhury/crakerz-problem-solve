/**
 * Convert temperature: [done]
 */

function temperatureConverter(valNum) {
    let c = (valNum-32)/1.8;
    console.log(typeof c);
    if (Number.isInteger(c)) {
        return c;
    } else {
        return c.toFixed(2);  
    }
}

var result = temperatureConverter(103);
console.log(result);