const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const test = companies.map(company => 1);
console.log(test);

// Normal Function way (Note: (``) is a template string)
const testMap0 = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap0);

// Arrow Function way
const testMap = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);
console.log(testMap);
