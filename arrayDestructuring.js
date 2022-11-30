// Destructuring assignment is a special syntax that allows us to “unpack” 
// arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Destructuring also works great with complex functions that have a lot of parameters, 
// default values, and so on. Soon we’ll see that.

// Possibly to unpack elements from arrays, or properties from objects, into distinct variables

// we have an array with the name and surname as the values
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
const [firstName, lastName] = arr // the assignment is just like variable no "" or other data types assigned
// This is similar with: 
// const firstName = arr[0]
// const lastName = arr[1]

console.log(firstName)
console.log(lastName)

const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo

console.log(red)

/* ------ */

// Ignoring elements using comma 
const people = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
const [name, , title] = people
console.log(name)
console.log(title)
// second index "Caesar" is ignore the comma is placed in second index

/* ------ */
// Swapping Variables
let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(guest) //Pete
console.log(admin) //Jane