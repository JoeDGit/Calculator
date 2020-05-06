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
let consDisplay = '';
let status = {

	awaitingSecondOperand: false,
	total: 0,
	temp: 0,
	tempA: 0,
	operand1: '',
	operand2: '',
	operand3: '',

};

function clear() {
	display.value = '';
	numbers = [];
	consDisplay = '';
	status.temp = 0;
	status.total = 0;
	status.awaitingSecondOperand = false;
	operators = [];
	
}


document.getElementById("clear").addEventListener("click", () => {
	clear();

});

document.querySelectorAll(".numbers").forEach(node => node.addEventListener ("click", function(e) { 
	const floatNo = parseFloat(e.target.id);
	display.value += e.target.id;
	numbers.push(floatNo);
	consDisplay += e.target.id;	
	
}));
document.querySelectorAll(".operators").forEach(node => node.addEventListener ("click", function(e) {

	const lastChar = consDisplay.charAt(consDisplay.length -1);
	const secondChar = consDisplay.charAt(1);
	const firstChar = consDisplay.charAt(0);
	
   		if(lastChar === "*" ||
     	lastChar === "/" ||
     	lastChar === "+" ||
     	lastChar === "-") {
		return

		} else if (firstChar === '') {
			return

		}else if (firstChar === '0' && secondChar !==".") {
			return clear();

		} else if (status.awaitingSecondOperand === true && operators.length <=1 ) {			
			let operA = '';			
			let operB = '';						
			const splitA = consDisplay.split(/([\+\-\*\/])/g);
				operA += (splitA[0]);
				operB += (splitA[2]);
				if (operA.includes(".") && operB.includes(!".") ) {
					status.operand1 = parseFloat(operA)
					status.operand2 = parseInt(operB);
				} else if (operB.includes(".") && operA.includes(!".")) {
					status.operand1 = parseInt(operA);
					status.operand2 = parseFloat(operB)
				} else if (operA.includes(".") && operB.includes(".")) {
					status.operand1 = parseFloat(operA)
					status.operand2 = parseFloat(operB)
				} else {
					status.operand1 = parseInt(operA);
					status.operand2 = parseInt(operB);
				}
			let operand1 = status.operand1;
			let operand2 = status.operand2;
			status.temp = operate(operand1, operators[0], operand2);
			status.total = status.total + status.temp;
			display.value = status.total;
			status.temp = 0;
			status.awaitingSecondOperand = !status.awaitingSecondOperand	
			console.log(splitA)	
			

		} else if (status.awaitingSecondOperand === true && operators.length > 1 ) {								
			const splitB = consDisplay.split(/([\+\-\*\/])/g);			
			let operC = splitB[splitB.length-1];		
			if (operC.includes(".")) {
				status.operand3 = parseFloat(operC);
			} else {
				status.operand3 = parseInt(operC);
			}
			let operand3 = status.operand3;						
			console.log(splitB)				
			status.tempA = operate(status.total, operators[operators.length-1], operand3);
				
			status.total = status.tempA;
			display.value = status.total;
			status.tempA = 0;
			status.awaitingSecondOperand = !status.awaitingSecondOperand;
			
		}	
		
		{	
				
			display.value += e.target.id;
			operators.push(e.target.id);
			consDisplay += e.target.id;			
			status.awaitingSecondOperand = !status.awaitingSecondOperand;			
		}}));


	document.getElementById("equals").addEventListener("click", () => {
		const lastChar = consDisplay.charAt(consDisplay.length -1);
		const secondChar = consDisplay.charAt(1);
		const firstChar = consDisplay.charAt(0);
			   if(lastChar === "*" ||
			 lastChar === "/" ||
			 lastChar === "+" ||
			 lastChar === "-") {
			return
			
			} else if (firstChar === '') {
				return
	
			}else if (firstChar === '0' && secondChar !==".") {
				return clear();
	
			} else if (status.awaitingSecondOperand === true && operators.length <=1 ) {			
				let operA = '';			
				let operB = '';								
				const splitA = consDisplay.split(/([\+\-\*\/])/g);
					operA += (splitA[0]);
					operB += (splitA[2]);
				
				if (operA.includes(".") && operB.includes(!".") ) {
					status.operand1 = parseFloat(operA)
					status.operand2 = parseInt(operB);
				} else if (operB.includes(".") && operA.includes(!".")) {
					status.operand1 = parseInt(operA);
					status.operand2 = parseFloat(operB)
				} else if (operA.includes(".") && operB.includes(".")) {
					status.operand1 = parseFloat(operA)
					status.operand2 = parseFloat(operB)
				} else {
					status.operand1 = parseInt(operA);
					status.operand2 = parseInt(operB);
				}
				let operand1 = status.operand1;
				console.log(operand1)
				let operand2 = status.operand2;
				console.log(operand2)
				status.temp = operate(operand1, operators[0], operand2);
				status.total = status.total + status.temp;
				display.value = status.total;
				status.temp = 0;
				status.awaitingSecondOperand = !status.awaitingSecondOperand	
				console.log(splitA)	
	
			} else if (status.awaitingSecondOperand === true && operators.length > 1 ) {								
				const splitB = consDisplay.split(/([\+\-\*\/])/g);			
				let operC = splitB[splitB.length-1];
				if (operC.includes(".")) {
					status.operand3 = parseFloat(operC);
				} else {
					status.operand3 = parseInt(operC);
				}
				let operand3 = status.operand3;				
				console.log(splitB)				
				status.tempA = operate(status.total, operators[operators.length-1], operand3);
					
				status.total = status.tempA;
				display.value = status.total;
				status.tempA = 0;
				status.awaitingSecondOperand = !status.awaitingSecondOperand;
			}	});

	document.getElementById("decimal").addEventListener("click", () => {
				if (consDisplay.charAt(consDisplay.length -1) === ".") {
					return
				} {
				consDisplay += '.';	
				display.value += '.';
	}});
	document.getElementById("backSpace").addEventListener("click", () => {
				
				let lastChar = consDisplay.charAt(consDisplay.length -1)
				if ( lastChar === (/([\+\-\*\/])/g)) {
					operators.pop();
					consDisplay = consDisplay.substring(0, consDisplay.length -1);
					display.value = display.value.substring(0, display.value.length -1);
					console.log(display.value)
					console.log('oppy', consDisplay)
					status.awaitingSecondOperand = !status.awaitingSecondOperand
					
				} {
					consDisplay = consDisplay.substring(0, consDisplay.length -1);
					display.value = display.value.substring(0, display.value.length -1);
					console.log(display.value)
					console.log('default', consDisplay)
					
				}		
		
		

	})


