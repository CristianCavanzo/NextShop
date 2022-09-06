const expressions = {
	validEmail: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
	validPassword:
		/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
};

const validInput = (value, expression) => {
	if (expression.test(value)) {
		return true;
	} else {
		return false;
	}
};

export { validInput, expressions };
