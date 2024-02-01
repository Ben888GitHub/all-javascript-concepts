const isEmptyObject = (obj) =>
	Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

console.log(isEmptyObject({})); // true
console.log(isEmptyObject({ name: 'fatfish' })); // false

// Reflect.ownKeys(obj) is utility from JS that checks whether a given Object{} is empty or not
// Reflect.ownKeys(obj) , gets all the keys of an object and returns no keys if the object is empty
// .length === 0 is true if no keys returned from Reflect.ownKeys(obj)
//  obj.constructor === Object , to make sure it's a pure object{} not the instance of constructor function()
