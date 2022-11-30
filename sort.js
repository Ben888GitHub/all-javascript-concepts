// sort() method

const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const people = [
	'Siri',
	'Alexa',
	'Google',
	'Facebook',
	'Twitter',
	'Linkedin',
	'Sinkedin'
];

// Get the companies by start year from the earliest
// In this case we need to take 2 parameters in the
// arrow function, and compare the start dates
// in a way however we want to
const sortedCompanies = companies.sort((c1, c2) => {
	// console.log(c1.start);
	if (c1.start > c2.start) {
		return 1;
	} else {
		return -1;
	}
});
console.log(sortedCompanies);

// Sort() method with arrow function and ternary operator
const companiesSorted = companies.sort((c1, c2) =>
	c1.name > c2.name ? 1 : -1
);
console.log(companiesSorted);

const sortedPeople = people.sort((p1, p2) => {
	// console.log(p1); // From Alexa to Sinkedin, the first element is removed which is Siri
	// console.log(p2); // From Siri to Linkedin, the last element is removed which is Sinkedin

	// p1 < p2 and return -1 means ascending
	// p1 > p2 and return -1 means descending
	// Assume that return -1 is a tool to determine whether the condition is ascending or descending
	if (p1 < p2) {
		return -1;
	}
	return 0;
});
console.log(sortedPeople);
