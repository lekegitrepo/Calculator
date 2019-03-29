
function getNumber(number){
	var input_var = document.getElementById('input');
	switch(number){
		case 1:
		    input_var.value += '1';
		    break;
		case 2:
		    input_var.value += '2';
		    break;
		case 3:
		    input_var.value += '3';
		    break;
		case 4:
		    input_var.value += '4';
		    break;
	    case 5:
		    input_var.value += '5';
		    break;
	    case 6:
		    input_var.value += '6';
		    break;
	    case 7:
		    input_var.value += '7';
		    break;
	    case 8:
		    input_var.value += '8';
		    break;
	    case 9:
		    input_var.value += '9';
		    break;
	    case 0:
		    input_var.value += '0';
		    break;
	}
}

//get math operators
function getOperand(operand){
	var input_var = document.getElementById('input');
	switch(operand){
		case '+':
		    input_var.value += '+';
		    break;
		case '-':
		    input_var.value += '-';
		    break;
		case 'x':
		    input_var.value += '*';
		    break;
		case '/':
		    input_var.value += '/';
		    break;
		case '.':
		    input_var.value += '.';
		    disableDot();
		    break;
		case '+/-':
		    input_var.value += '-' + input_var.value;
		    break;
	} 
} 

/*operator functions*/


//compute
function compute(){
	evaluate();
}

function evaluate(){
	var input_var = document.getElementById('input');
	var answer = document.getElementById('answer');

	if (input_var.value.length < 1 || input_var.value.length == null) {
		answer.value = '';
		return;
	}

	if (!parseInt(input_var.value.charAt(input_var.value.length - 1)) && 
		input_var.value.charAt(input_var.value.length - 1) !== '0') {
		return;
	}

	answer.value =  parse(input_var.value);
}


// backspace
function backspace(){
	var input_var = document.getElementById('input');
	var answer = document.getElementById('answer');
	var x = input_var.value;
	if (x.length > 0) {
		x = x.substring(0, x.length - 1); // remove the last character in input.
		input_var.value = x;
		evaluate();
		disableDot();
	}
}

function disableDot(){
	var input_var = document.getElementById('input');
	var disable = document.getElementById("dot");
	if (input_var.value.indexOf('.') > 0) {
		disable.disabled = true;
	}else{
		disable.disabled = false;
	}
}

//clear screen
function clearScreen(){
	var input_var = document.getElementById('input');
	var answer = document.getElementById('answer');
	input_var.value = '';
	answer.value = '';
	parse(input_var.value);
	disableDot();
}


function parse(str) {
    var signs = [".", "*", "/", "+", "-"]; 
    var funcs = [dot, multiply, divide, add, subtract];
    var tokens = str.split(/\b/);
    console.log(tokens)
    for (var round = 0; round < signs.length; round++) { 
        for (var place = 0; place < tokens.length; place++) {   
            if (tokens[place] == signs[round]) {                       
                var a = (str.indexOf('.')) ? parseFloat(tokens[place - 1]) : parseInt(tokens[place - 1]); 
                var b = (str.indexOf('.')) ? parseFloat(tokens[place + 1]) : parseInt(tokens[place + 1]); 
                var result = funcs[round](a, b);          
                tokens[place - 1] = result.toString();
                tokens.splice(place--, 2);
            }
        }
    }
    return tokens[0];                 

    function multiply(x, y) {                   
        return x * y;
    }

    function divide(x, y) {                   
        return x / y;
    }

    function add(x, y) {                        
        return x + y;
    }

    function subtract(x, y) {                   
        return x - y;
    }

    function dot(x, y) {                   
        return `${x}.${y}`;
    }
}
