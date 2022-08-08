document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}

const display = document.querySelector('.display')
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
            if (currentOperand == 0) {
                alert('ZeroDivision is prohibited')
                result = 0
                break;
            }
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
            clearDisplay();
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

const clearDisplay = (char_count) => {
    if (char_count && Number.isInteger(char_count)) {
        display.value = display.value.slice(0, -Math.abs(char_count))
        currentOperand = display.value;
    } else {
        display.value = "0"
    }
}

buttonsBlock.addEventListener('click', (event) => {
        const keyValue = event.target.innerHTML;
        performInputOperation(keyValue)
    }
)

window.onkeydown = (event) => {
    if (event.key == 'Backspace') {
        event.preventDefault();
        clearDisplay(1);
    } else if (event.key == "Enter") {
        event.preventDefault();
        performInputOperation("=")
    }
}

document.addEventListener('keypress', event => {
    const keyValue = event.key;
    console.debug(keyValue)
    performInputOperation(keyValue);
})
