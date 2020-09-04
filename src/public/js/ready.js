/* eslint-disable no-unused-vars */
const ready = () => {
	setTimeout(() => {
		document.getElementById('loader').style.display = 'none';
		document.getElementById('main').style.display = 'block';
		document.getElementById('me').style.display = 'none';
	}, 500);
};
