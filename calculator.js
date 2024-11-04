const masterContainer = document.querySelector('.master-container');
const btnContainer = document.querySelector('.btn-container');
const displayContent = document.querySelector('#text-display');

let displayText = '';

let number1 = null;
let number2 = null;
let operator;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a , b) => a % b;

btnContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('number')) {
        updateDisplay(e.target.textContent);
    }

    if (e.target.classList.contains('operator')){
        logValues(Number(displayText), e.target.getAttribute('id'));
    }

    if (e.target.classList.contains('clearAll')){
        clearCalc();
    }
});

function clearCalc() {
    number1 = null;
    number2 = null;
    operator = undefined;
    displayText = '';
    displayContent.textContent = '0';
    console.log('youve reached me');
}

function logValues(value, operation){
    if (operation === 'equals') {
        number2 = value;
        number1 = operate(number1, number2, operator);
        number2 = null;
    } else if (number1 === null) {
        number1 = value;
        operator = operation;
        displayText = '';
    } else if (number1 !== null) {
        number2 = value;
        number1 = operate(number1, number2, operator);
        operator = operation;
        number2 = null;
    }
}

function updateDisplay(input){
    displayText = displayText.concat(input);
    displayContent.textContent = displayText;
};

function operate(value1, value2, op){
    switch (op) {
        case '+':
            displayText = '';
            displayContent.textContent = add(value1, value2);
            return Number(displayContent.textContent);

        case '-':
            displayText = '';
            displayContent.textContent = subtract(value1, value2)
            return Number(displayContent.textContent);
        
        case '*':
            displayText = '';
            displayContent.textContent = multiply(value1, value2)
            return Number(displayContent.textContent);
            
        case '/':
            displayText = '';
            displayContent.textContent = divide(value1, value2)
            return Number(displayContent.textContent);

        case '%':
            displayText = '';
            displayContent.textContent = modulo(value1, value2)
            return Number(displayContent.textContent);
        
        default:
            break;
    }
}
