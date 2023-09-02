const qs = require('qs');

const slugify = (string, separator = '-') =>
	string
		.toString() // Cast to string (optional)
		.toLowerCase() // Convert the string to lowercase letters
		.trim() // Remove whitespace from both sides of a string (optional)
		.replace(/\s+/g, separator) // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\_/g, separator) // Replace _ with -
		.replace(/\-\-+/g, separator) // Replace multiple - with single -
		.replace(/\-$/g, ''); // Remove trailing -

const output = slugify('Hello, World!');

console.log(output);

const output_with_underscore = slugify('Hello, World!', '_');

console.log(output_with_underscore);

// * More Advance usages

const url = 'https://medium.com';
const params = { name: 'fatfish', age: 100 };
const badOutput = slugify(params.name, params.age);
console.log(`${url}?${badOutput}`);

// turn to URL
const goodOutput = qs.stringify(params);
console.log(`${url}?${goodOutput}`);
