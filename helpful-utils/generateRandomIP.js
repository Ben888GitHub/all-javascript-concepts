const generateRandomIP = () =>
	Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');

console.log(generateRandomIP());