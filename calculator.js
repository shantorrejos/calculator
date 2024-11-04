const masterContainer = document.querySelector('.master-container');
const btnContainer = document.querySelector('.btn-container');
const displayContent = document.querySelector('#text-display');
const decimalButton = document.querySelector('.decimal');

let displayText = '';

let number1 = null;
let number2 = null;
let operator;
let decimal = false;

const add = (a, b) => Math.round((a + b) * 100) / 100;
const subtract = (a, b) => Math.round((a - b) * 100) / 100;
const multiply = (a, b) => Math.round((a * b) * 100) / 100;
const divide = (a, b) => {
    if (b === 0){
        return 0;
    }
    return Math.round((a / b) * 100) / 100};
const modulo = (a , b) => Math.round((a % b) * 100) / 100;

btnContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('number') && !(e.target.classList.contains('decimal'))) {
        updateDisplay(e.target.textContent);
    }

    if (e.target.classList.contains('operator')){
        logValues(Number(displayText), e.target.getAttribute('id'));
    }

    if (e.target.classList.contains('decimal') && decimal === false){
        updateDisplay(e.target.textContent);
        toggleDecimal(decimalButton);
    }

    if (e.target.classList.contains('clearAll')){
        clearCalc();
    }
});

function toggleDecimal(){
    if (decimal === false){
        decimalButton.style.backgroundColor = '#cccccc'
        decimal = true;
    } else {
        decimalButton.style.backgroundColor = '#fafbff'
        decimal = false;
    }
}


function clearCalc() {
    number1 = null;
    number2 = null;
    operator = undefined;
    displayText = '';
    displayContent.textContent = '0';
    
    if (decimal === true){
        toggleDecimal();
    };
}

function logValues(value, operation){
    toggleDecimal(decimalButton);

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
