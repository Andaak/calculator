
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display')

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (a / b).toFixed(2);

let operator = '*';
let total = null;
let number2 = null;

const operate = (operator, number1, number2) => {
    if (operator === '+') return add(number1, number2);
    else if (operator === '-') return subtract(number1, number2);
    else if (operator === '*') return multiply(number1, number2);
    else if (operator === '/') return divide(number1, number2);
}

const buttonPress = () => {
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            if (button.id === 'clear') {
                total = null;
                number2 = null;
                display.textContent = '0';
            }
            else if (button.id === 'equals') {
                number2 = Number(display.textContent);
                display.textContent = operate(operator, total, number2);
            }
            else if (isNaN(button.id)) {
                if (total === null) {
                    total = Number(display.textContent);
                    operator = button.textContent;
                }
                else {
                    number2 = Number(display.textContent);
                    total = operate(operator, total, number2);
                    operator = button.textContent;
                }
                display.textContent = '0';
            }
            else if (display.textContent === '0') {
                display.textContent = button.textContent;
            }
            else {
                display.textContent += button.textContent;
            }
        })
    })
}


buttonPress();