function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    if (secondNumber === 0) {
        return 'Error: Division by zero';
    }
    return firstNumber/secondNumber;
}

function operate(firstNumber, operator, secondNumber){
    let result;
    
    switch (operator){
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = subtract(firstNumber, secondNumber);
            break;
        case '*':
            result = multiply(firstNumber, secondNumber);
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            break;
    }

    return result;
}

const display = document.getElementById('display');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const floatingPointBtn = document.querySelector('.floating-point');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');

let displayValue = '';
let firstNumber = 0;
let secondNumber = 0;

function updateDisplay(value) {
    display.textContent = value;
    return 0;
}

function separateNumbers(expression) {
    const regex = /([\d\.]+)\s*(\*\*|\/\/|[\+\-\*\/%])\s*([\d\.]+)/;
    const match = expression.match(regex);

    if (match) {
        const firstNumber = match[1];
        const operator = match[2];
        const secondNumber = match[3];

        return {
            firstNumber: parseFloat(firstNumber),
            operator: operator,
            secondNumber: parseFloat(secondNumber)
        };
    }
}

numberBtns.forEach(button => {
    updateDisplay(displayValue);

    button.addEventListener('click', () => {
        displayValue += button.textContent;
        updateDisplay(displayValue);
    });
});

operatorBtns.forEach(button => {
    updateDisplay(displayValue);

    button.addEventListener('click', () => {
        displayValue += button.textContent;
        updateDisplay(displayValue);
    });
});

floatingPointBtn.addEventListener('click', () => {
    displayValue += floatingPointBtn.textContent;
    updateDisplay(displayValue);
});


clearBtn.addEventListener('click', () => {
    displayValue = '';
    updateDisplay(displayValue);
});

equalsBtn.addEventListener('click', () => {
    // This will be implemented in the next steps
    console.log('Equals button clicked. Current display value:', displayValue);

    separatedValue = separateNumbers(displayValue);

    if (separatedValue) {
        console.log("First Number:", separatedValue.firstNumber);
        console.log("Operator:", separatedValue.operator);
        console.log("Second Number:", separatedValue.secondNumber);
      } else {
        console.log("Invalid expression");
      }

    result = operate(separatedValue.firstNumber, separatedValue.operator, separatedValue.secondNumber);
    
    displayValue += '=' + result;
    updateDisplay(displayValue);

    displayValue = '';
});

