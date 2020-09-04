/* eslint-disable no-alert */
/* eslint-disable-next-line no-unused-vars */
const check = () => {
	if (!document.getElementById('role').value) {
		alert('Please Enter Your Title!');
		return false;
	}
	if (!document.getElementById('prof').value) {
		alert('Please Enter Your Name!');
		return false;
	}
	return true;
};
