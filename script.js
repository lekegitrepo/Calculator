
var calculate;
var calculate2;
var operatorSign = '';
var operatorPos = 0;
var operatorPos2 = 0;
function getNumber(number){
	var input_var = document.getElementById('input');
	switch(number){
		case 1:
		    input_var.value += '1';
		    evaluate();
		    break;
		case 2:
		    input_var.value += '2';
		    evaluate();
		    break;
		case 3:
		    input_var.value += '3';
		    evaluate();
		    break;
		case 4:
		    input_var.value += '4';
		    evaluate();
		    break;
	    case 5:
		    input_var.value += '5';
		    evaluate();
		    break;
	    case 6:
		    input_var.value += '6';
		    evaluate();
		    break;
	    case 7:
		    input_var.value += '7';
		    evaluate();
		    break;
	    case 8:
		    input_var.value += '8';
		    evaluate();
		    break;
	    case 9:
		    input_var.value += '9';
		    evaluate();
		    break;
	    case 0:
		    input_var.value += '0';
		    evaluate(0);
		    break;
	}
}

//get math operators
function getOperand(operand){
	var input_var = document.getElementById('input');
	switch(operand){
		case '+':
		    input_var.value += '+';
		    operatorSign = '+';
		    add();
		    console.log('operatorPos ' + operatorPos);
		    break;
		case '-':
		    input_var.value += '-';
		    operatorSign = '-';
		    subtract();
		    console.log('operatorPos ' + operatorPos);
		    break;
		case 'x':
		    input_var.value += '*';
		    operatorSign = '*';
		    multiply();
		    console.log('operatorPos ' + operatorPos);
		    break;
		case '/':
		    input_var.value += '/';
		    operatorSign = '/';
		    divide();
		    console.log('operatorPos ' + operatorPos);
		    break;
		case '+/-':
		    input_var.value += '-' + input_var.value;
		    break;
	} 
} 

//operator functions
function add(){ 
	var input_var = document.getElementById('input');
	var answer = document.getElementById('answer');
	var plus = input_var.value.indexOf('+', operatorPos);
	operatorPos2 = plus;
	calculate2 = parseInt(answer.value);
	operatorPos = plus + 1;
	console.log('calculate ' + calculate + ' calculate2 ' + calculate2 + ' plus ' + plus);
}

function subtract(){ 
	var input_var = document.getElementById('input');
	var answer = document.getElementById('answer');
	var minus = input_var.value.indexOf('-', operatorPos);
	operatorPos2 = minus;
	calculate2 = parseInt(answer.value);
	operatorPos = minus + 1;
	console.log('calculate ' + calculate + ' calculate2 ' + calculate2 + ' minus ' + minus);
}

function multiply(){ 
	var input_var = document.getElementById('input');
	var answer = document.getElementById('answer');
	var multiply = input_var.value.indexOf('*', operatorPos);
	operatorPos2 = multiply;
	calculate2 = parseInt(answer.value);
	operatorPos = multiply + 1;
	console.log('calculate ' + calculate + ' calculate2 ' + calculate2 + ' multiply ' + multiply);
}

function divide(){ 
	var input_var = document.getElementById('input');
	var answer = document.getElementById('answer');
	var divide = input_var.value.indexOf('/', operatorPos);
	operatorPos2 = divide;
	calculate2 = parseInt(answer.value);
	operatorPos = divide + 1;
	console.log('calculate ' + calculate + ' calculate2 ' + calculate2 + ' divide ' + divide);
}

//compute
function compute(){
	var input_var = document.getElementById('input');
	if (!parseInt(input_var.value.charAt(input_var.value.length - 1))) {
		console.log(input_var.value.charAt(input_var.value.length - 1));
		return;
	}
	var ans = Math.floor(+eval(input_var.value));
	document.getElementById('answer').value = '=' + ans;
	//console.log(input_var.value.charAt(input_var.value.length - 1));
	console.log(input_var.value.length)
}

function evaluate(){
	var input_var = document.getElementById('input');
	var answer = document.getElementById('answer');

	//answer.value =  parseInt(input_var.value);

	var char = input_var.value.charAt(input_var.value.lastIndexOf(operatorSign)); // last operator before next digit.
	
	if (parseInt(input_var.value.slice(operatorPos))) {
		var index = parseInt(input_var.value.slice(operatorPos));
	    console.log('index ' + index);
	    console.log('operatorSign ' + operatorSign);
	}
	//var operand2 = parseInt(answer.value);
	//var operand1 = parseInt(answer.value);

		//calculate = (calculate === undefined) ? operand1 : (calculate === NaN) ? operand1 : calculate;
	    
		if (char == '*' && operatorSign == '*') {
			calculate = calculate2 * index;
			answer.value =  calculate;
		}else if (char == '+' && operatorSign == '+') {
			calculate = calculate2 + index;
			answer.value =  calculate;
		}else if (char == '-' && operatorSign == '-') {
			calculate = calculate2 - index;
			answer.value = calculate;
		}else if (char == '/' && operatorSign == '/') {
			calculate = calculate2 / index;
			answer.value = calculate;
		}else{
			answer.value =  parseInt(input_var.value);
		}
}

//bracket
var i = 0;
function brackets(){
	var input_var = document.getElementById('input');
	if (i == 0) {
		input_var.value += '(';
		i = 1;
	}else if (i == 1) {
		input_var.value += ')';
		i = 1;
	}
}

// backspace
function backspace(){
	var input_var = document.getElementById('input');
	var x = input_var.value;
	if (x.length > 0) {
		x = x.substring(0, x.length - 1); // remove the last character in input.
		input_var.value = x;
	}
}

//clear screen
function clearScreen(){
	document.getElementById('input').value = "";
	document.getElementById('answer').value = "";
}