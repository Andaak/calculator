const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operator = '/';
let number1 = 1;
let number2 = 2;

const operate = (operator, number1, number2) => {
    if (operator === '+') return add(number1, number2);
    else if (operator === '-') return subtract(number1, number2);
    else if (operator === '*') return multiply(number1, number2);
    else if (operator === '/') return divide(number1, number2);
}

const result = operate(operator, number1, number2);
console.log(result);