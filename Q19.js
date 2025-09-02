//  JavaScript Program to Make a Simple Calculator 

let num1 = parseFloat(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter second number:"));

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error! Division by zero not allowed.";
    }
} else {
    result = "Invalid operator!";
}

alert(num1 + " " + operator + " " + num2 + " = " + result);
