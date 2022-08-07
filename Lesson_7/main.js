const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const buttonsBlock = document.querySelector('.button-block')


let currentOperand = null;
let previousOperand = null;
let currentOperation = null;
let result;

const performOperation = (operation) => {
    switch (operation) {
        case '+':
            result = Number(previousOperand) + Number(currentOperand)
            break;
        case "-":
            result = Number(previousOperand) - Number(currentOperand)
            break;
        case "/":
            result = Number(previousOperand) / Number(currentOperand)
            break;
        case "*":
            result = Number(previousOperand) * Number(currentOperand)
            break;
        default:
            alert('Unsupported operation')
            break;
    }
    return result;
}

const performInputOperation = keyValue => {
    switch (keyValue) {
        case "/":
        case "*":
        case "-":
        case '+':
            previousOperand = currentOperand;
            currentOperand = null
            currentOperation = keyValue;
            display.value = currentOperand
            break;
        case 'c':
            previousOperand = null;
            currentOperand = null;
            currentOperation = null;
            display.value = "0"
            break;
        case "=":
            performOperation(currentOperation);
            currentOperand = null;
            previousOperand = null;
            display.value = result;
            break;
        default:
            if (Number.isInteger(Number(keyValue))) {
                currentOperand = (currentOperand === null) ? keyValue : currentOperand + keyValue
                console.debug(currentOperand)
                display.value = currentOperand
            } else {
                alert('incorrect input')
            }
    }
}

buttonsBlock.addEventListener('click', (event) => {
        const keyValue = event.target.innerHTML;
        performInputOperation(keyValue)
    }
)


document.addEventListener('keypress', event => {
    const keyValue = event.key;
    performInputOperation(keyValue);
})