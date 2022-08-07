//EMAIL - using Constraint Validation API properties validity, typeMisMatch, setCustomValidity, reportValidity
const email = document.getElementById("email");

email.addEventListener("input", function (event) {
	if (email.validity.typeMismatch) {
		email.setCustomValidity("I am expecting an e-mail address!");
		email.reportValidity();
	} else {
		email.setCustomValidity("");
	}
});
