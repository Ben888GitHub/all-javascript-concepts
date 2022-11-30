const human = {
	name: 'John',
	age: 30,
	maritalStatus: 'married',
	isWorking: true,
	hasPet: true,
	cashInBank: 1000000
};

// First way of Destructuring
const printOutFirstHuman = ({
	name,
	age,
	maritalStatus,
	isWorking,
	cashInBank
}) => {
	console.log(
		`${name} is ${age} years old, currently ${
			isWorking ? 'working' : 'not working'
		},${maritalStatus} and has ${cashInBank} in the bank.`
	);
};
printOutFirstHuman(human);

// Second way of Destructuring
const printOutSecondHuman = () => {
	const { name, age, maritalStatus, isWorking, cashInBank } = human;

	console.log(
		`${name} is ${age} years old, currently ${
			isWorking ? 'working' : 'not working'
		},${maritalStatus} and has ${cashInBank} in the bank.`
	);
};

printOutSecondHuman();

// Object Destructuring with dynamic key
const productData = { id: '23', name: 'Laptop' };
// we can also give alias name of variable when destructuring
const { id: deviceId, name: deviceName } = productData;

console.log(`deviceName: ${deviceName}`);

// here destructuring with dynamic key
const extractKey = 'name';
const { [extractKey]: data } = productData;

console.log(`data: ${data}`);
