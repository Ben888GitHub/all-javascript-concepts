const copyToClipboard = (content) => navigator.clipboard.writeText(content);

// Can be used to copy form input value in React / NextJS
copyToClipboard('Hello fatfish');
