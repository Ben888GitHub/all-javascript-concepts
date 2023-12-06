const person = {
	id: 'ab32',
	name: 'John'
};

console.log('name' in person);
console.log('isActive' in person);

const numbers = [1, 2, 3];
const foundNumbers = numbers.includes(3);
console.log(foundNumbers);

const arrOfObjs = [
	{
		title: 'AA'
	},
	{
		title: 'BB'
	}
];

const foundObject = arrOfObjs.find((obj) => obj.title === 'AA');
console.log(foundObject);
