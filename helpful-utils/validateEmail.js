const validateEmail = (email) => {
	const regex = /^\S+@\S+\.\S+$/;
	return regex.test(email);
};

const correctFormat = validateEmail('youremail@org.com');

console.log(correctFormat);

const wrongFormat = validateEmail('youremail@com');

console.log(wrongFormat);

const wrongFormat2 = validateEmail('youremail.org@com');

console.log(wrongFormat2);
