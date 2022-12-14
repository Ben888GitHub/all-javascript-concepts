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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// var retailCompanies = [];
// for (let i = 0; i >= companies.category; i++) {
//   if (companies[i] == "Retail") {
//     retailCompanies.push(companies[i]);
//   }
// }
// console.log(retailCompanies);

// const retailCompanies = companies.filter(
//   company => company.category == "Retail"
// );
// console.log(retailCompanies);

// Get 80s companies
const company80 = companies.filter(
  year => year.start >= 1980 && year.start <= 1990
);
console.log(company80);

// Get the company ending years greater than 10
const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);
console.log(lastedTenYears);
