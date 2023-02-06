/**
 * Convert temperature: [done]
 */

function temperatureConverter(valNum) {
    let c = (valNum-32)/1.8;

    if (parseInt(c) == c) 
    {
        return c;
    } 
    else 
    {
        let newValue = c.toFixed(2);
        newValue = parseFloat(newValue);
        return newValue;
    }

}

var result = temperatureConverter(50);
console.log(result);