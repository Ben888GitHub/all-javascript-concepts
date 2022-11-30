const someObject = {
	profile: {
		firstName: 'Nicky',
		lastName: 'Christensen',
		country: 'Denmark'
	}
};
// with optional chaining:
if (someObject?.profile?.firstName) {
	console.log('Name is 1: ', someObject.profile.firstName);
} // navigate object graph safely

// old style without optional chaining:
if (someObject && someObject.profile && someObject.profile.firstName) {
	console.log('Name is 2: ', someObject.profile.firstName);
}

// with optional chaining that fails as name doesnt exist:
if (someObject?.profile?.name) {
	console.log('Name is 3: ', someObject.profile.firstName);
} // navigate object graph safely
