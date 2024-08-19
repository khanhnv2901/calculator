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
        return  'Error: Divison by Zero!';
    }
    return firstNumber/secondNumber;
}

function exponentiation (firstNumber, secondNumber){
    return firstNumber ** secondNumber;
}

function modulus(firstNumber, secondNumber){
    return firstNumber % secondNumber;
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
        case '**':
            result = exponentiation(firstNumber, secondNumber);
            break;
        case '%':
            result = modulus(firstNumber, secondNumber);
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
const backSpaceBtn = document.querySelector('.backspace');

let floatingPointAdded = false;

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
        const firstNumber = parseFloat(match[1]);
        const operator = match[2];
        const secondNumber = parseFloat(match[3]);

        return {
            firstNumber: roundNumber(firstNumber),
            operator: operator,
            secondNumber: roundNumber(secondNumber)
        };
    } else {
        return null;
    }
}

function roundNumber(num, decimalPlaces = 5) {
    return parseFloat(num.toFixed(decimalPlaces));
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
    if (!floatingPointAdded) {
        displayValue += floatingPointBtn.textContent;
        updateDisplay(displayValue);
        floatingPointAdded = true;
    }
});


clearBtn.addEventListener('click', () => {
    displayValue = '';
    updateDisplay(displayValue);
});

backSpaceBtn.addEventListener('click', () => {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    updateDisplay(displayValue);
})

equalsBtn.addEventListener('click', () => {

    if (displayValue == '') {
        displayValue += 'Please enter number!';
        updateDisplay(displayValue);
        displayValue = '';
    } else {
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
    }
});

