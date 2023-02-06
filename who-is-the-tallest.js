/**
 * Who is the tallest? : [done]
 */

function tallestFriend ( height ) {
    var maxLenght = height[0];
    for (var i = 1; i< height.length; i++) {
        maxLenght = Math.max(maxLenght, height[i]);
    }
    return maxLenght;
}
var height = [157, 134, 188];
var tallest1 = tallestFriend(height);