// * It can be using 3rd party library or integration too, so be programmatic

function convertToCurrency(num, currency = 'EUR', locale = 'nl-NL') {
	const formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency
	});

	return formatter.format(num);
}

console.log(convertToCurrency(800));
