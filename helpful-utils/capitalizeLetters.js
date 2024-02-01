const capitalize = (str) => {
	const words = str.split(' ');

	// Capitalize the first letter of each word
	const capitalizedWords = words.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});

	// Join the words back to form the final capitalized string
	return capitalizedWords.join(' ');
};

const capitalValue = capitalize('hello world, this is a test'); // Hello World, This Is A Test

console.log(capitalValue);

const str = 'hello world, this is a test';
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // "HELLO WORLD, THIS IS A TEST"
