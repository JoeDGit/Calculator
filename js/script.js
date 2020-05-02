function add (a, b) {
	return a + b;	
}

function subtract (a, b) {
	return a - b;
}

function divide (a, b) {
	return a / b;
}

function multiply (a, b) {	
	return a * b;
}

function operate(x, y, z) {
	if( y === '+' ) {
		return add(x, z)
	} else if( y === '-') {
		return subtract(x, z)
	} else if ( y === '/') {
		return divide(x, z) }
	else if ( y === '*') {
		return multiply(x, z)
	}
	else return "invalid selection";
};
	
