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
let numbers = [];
let operators = [];
let consDisplay = ''

document.getElementById("clear").addEventListener("click", () => {
	display.value = '';
	numbers = [];
	consDisplay = ''
	
});

document.querySelectorAll(".numbers").forEach(node => node.addEventListener ("click", function(e) {
	display.value += e.target.id;
	numbers += e.target.id;
	consDisplay += e.target.id;
	console.log(consDisplay)
}));
document.querySelectorAll(".operators").forEach(node => node.addEventListener ("click", function(e) {

	const lastChar = consDisplay.charAt(consDisplay.length -1);
	const firstChar = consDisplay.charAt(0);
   		if(lastChar === "*" ||
     	lastChar === "/" ||
     	lastChar === "+" ||
     	lastChar === "-") {
		return
		} else if (firstChar === '') {
			return
		}	{
	display.value += e.target.id;
	operators.push(e.target.id);
	consDisplay += e.target.id;
	console.log(operators)
	console.log(consDisplay)
	

	
	}}));


// function equals () {
// const calculation = numbers.reduce(total, no => {
// 	return total + (no)


// });
// document.getElementById("equals").addEventListener("click",())
	



// document.getElementById("1").addEventListener("click", () => display.value += 1); initial attempt, optimized