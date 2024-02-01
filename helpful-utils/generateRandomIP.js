const generateRandomIP = () =>
	Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');

const randomIp = generateRandomIP();

console.log(randomIp);
