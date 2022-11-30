const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// arr.indexOf() to search the index of the selected element or first element on the array
const findCamelIndex = beasts.indexOf("camel")
console.log(findCamelIndex)
// if an element is not found it will return -1
const findGirrafeIndex = beasts.indexOf("girrafe")
console.log(findGirrafeIndex)

function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) !== -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach'); // when spinach is not existed yet

updateVegetablesCollection(veggies, 'spinach'); // when spinach is already existed

/* ------ */

/* arr.find() to search for an object with specific condition 
It will return the first element in the provided array */
const firstArray = [5, 12, 8, 130, 44]
const found = firstArray.find(element => element > 12)
console.log(found) /* 130 because it is the first element on 
the array that is bigger than 12 */
const largerThanThisNumber = 500

// My Example
const updateFirstArray = (firstArray, largerThanThisNumber) => {
    console.log(firstArray)
    console.log(largerThanThisNumber)
    if (firstArray.find(element => element > largerThanThisNumber) === undefined) {
        firstArray.push(largerThanThisNumber)
        console.log(firstArray)
    }

}
updateFirstArray(firstArray, largerThanThisNumber)

// updateFirstArray(firstArray, largerThanThisNumber)
console.log(firstArray)

/* ------ */
/* arr.findIndex() similar with arr.find() but it'll find the 
index of the value instead of the value itself */

const firstArrayIndex = [5, 12, 8, 130, 44]
const foundIndex = firstArray.findIndex(element => element > 12)
console.log(foundIndex) //3

// arr.indexOf() to search the index of the selected element or last element on the array
const lastArrayIndex = [5, 100, 8, 130, 100, 100]
const foundLastIndex = lastArrayIndex.lastIndexOf(100)
console.log(foundLastIndex)

const animals = ['ant', 'bison', 'camel', 'duck', 'bison'];

// arr.indexOf() to search the index of the selected element or first element on the array
const findBisonIndex = beasts.lastIndexOf("bison")
console.log(findBisonIndex)

// CONCLUSION
// To Identify:
// arr.indexOf() and arr.lastIndexOf() will just take 1 argument
// arr.find() and arr.findIndex() will take a function of a certain condition
