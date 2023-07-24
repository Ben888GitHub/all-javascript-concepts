// * Reference: https://www.geeksforgeeks.org/how-to-detect-the-user-browser-safari-chrome-ie-firefox-and-opera-using-javascript/

const checkBrowser = () => {
	// Get the user-agent string
	let userAgentString = navigator.userAgent;

	// Detect Chrome
	let chromeAgent = userAgentString.indexOf('Chrome') > -1;

	// Detect Internet Explorer
	let IExplorerAgent =
		userAgentString.indexOf('MSIE') > -1 || userAgentString.indexOf('rv:') > -1;

	// Detect Firefox
	let firefoxAgent = userAgentString.indexOf('Firefox') > -1;

	// Detect Safari
	let safariAgent = userAgentString.indexOf('Safari') > -1;
};
