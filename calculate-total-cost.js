/**
 * Calculate total cost : [done]
 */

const totalCost = (products) => {
    let totalCost = 0;
    for (let i = 0; i < products.length; i ++) {
        totalCost += products[i].price;
    }
    return totalCost;

};

var result = totalCost([{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}]);
console.log(result);