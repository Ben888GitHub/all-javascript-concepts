const x = 180;

x > 100
	? console.log('x is greater than 100')
	: console.log('x is less than 100');
x > 100
	? x > 200
		? console.log('Above 200')
		: console.log('Between 100-200')
	: console.log('Below 100');

// Shorter and Easier ways of writing the above code
let one = 1,
	two = 2,
	three = 3;
console.log(one && two && three);

const text = '';
const checkName = text || 'No text written';
console.log(checkName);

const address = 'Encino Oak 80';
const checkAddress = address || 'No address founded';
console.log(checkAddress);
