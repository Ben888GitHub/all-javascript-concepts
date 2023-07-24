// * Tailwind or next-theme can provide the function to detect

// * or

const isDarkMode =
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log(isDarkMode);
