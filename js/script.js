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

let display = document.querySelector("#display");
let displayValue = [display.value];

document.getElementById("clear").addEventListener("click", () => display.value = '');

document.querySelectorAll(".numbers").forEach(node => node.addEventListener ("click", function(e) {
	display.value += e.target.id;
}));
document.querySelectorAll(".operators").forEach(node => node.addEventListener ("click", function(e) {
	display.value += e.target.id;
}));

document.getElementById("equals").addEventListener("click",())
console.log(displayValue);
	



// document.getElementById("1").addEventListener("click", () => display.value += 1); initial attempt, optimized