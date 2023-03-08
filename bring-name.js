/**
 * Bring me the names! [Done]
 */

const findNames = (arrOfObj) => {

    return arrOfObj.map(element => element.name);
}

const arrOfObj = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Mary',
        age: 25
    },
    {
        name: 'Peter',
        age: 30
    }
]

console.log(findNames(arrOfObj));