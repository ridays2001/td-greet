setInterval(() => {
	const count = parseInt(document.getElementById('count').innerHTML, 10);
	document.getElementById('count').innerHTML = count - 1;
}, 1000);

setTimeout(() => {
	window.location = 'https://github.com/ridays2001';
}, 10000);
