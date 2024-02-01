// * It can be using 3rd party library or integration too, so be programmatic

function convertToCurrency(num, currency = 'EUR', locale = 'nl-NL') {
	const formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency
	});

	return formatter.format(num);
}

console.log(convertToCurrency(800));

// * Fortunately, you can use https://www.exchangerate-api.com/ to convert to any curreny
// * Simple reference:
// * - https://github.com/simranlotey/react-currency-converter?tab=readme-ov-file
// * - https://www.jsonapi.co/public-api/category/Currency%20Exchange
// * - https://www.abstractapi.com/guides/best-currency-exchange-apis
