const isValid = false;
const age = 18;

// we can use spread operator (...) add properties into object

const person = {
	id: 'ab32',
	name: 'John',
	...(isValid && { isActive: true }),
	...((age >= 18 || isValid) && { cart: 0 })
};

console.log(person);
