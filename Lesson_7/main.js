document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;

function noselect() {
   alert('Prohibited !!!')
    return false;
}

const display = document.querySelector('.display')
const buttonsBlock = document.querySelector('.button-block')


let currentOperand = null;
let previousOperand = null;
let currentOperation = null;
let result;

const AvailableOperations = {
    '+': () => {
        return previousOperand + currentOperand
    },
    '-': () => {
        return  previousOperand - currentOperand
    },
    '/': () => {
        if (currentOperand == 0) {
            alert('ZeroDivision is prohibited')
            result = 0
        }
        return Number(previousOperand) / Number(currentOperand)
    },
    '*': () => {
        return Number(previousOperand) * Number(currentOperand)
    }
}

const performOperation = (operation) => {
    default_result = () => {
        alert('Unsupported operation')
    }
    result = AvailableOperations[operation] || default_result
    console.log('RESULT')
    console.log(result)
    return result();
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
            result = performOperation(currentOperation);
            display.value = result
            currentOperand = null;
            previousOperand = null;
            break;
        default:
            if (Number.isInteger(Number(keyValue))) {
                currentOperand = (currentOperand === null) ? Number(keyValue) : Number(currentOperand + keyValue)
                display.value = currentOperand
            } else if (AvailableOperations[keyValue] == undefined) {
                alert('incorrect input')
            } else {
                previousOperand = Number(currentOperand)
                currentOperand = null
                currentOperation = keyValue
                display.value = Number(currentOperand)
                break;
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

const add_operation_button = document.querySelector('.add_op_button')

add_operation_button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('U here');
    const add_operation_form = document.querySelector('.add_operation_box')
    const current_style = add_operation_form.style.display
    switch (current_style) {
        case 'none':
            add_operation_form.style.display = 'block'
            break;
        default:
            add_operation_form.style.display = 'none'
            break;
    }
})

window.onkeydown = (event) => {
    if (event.key == 'Backspace' && !isNewOperationAdding()) {
        event.preventDefault();
        clearDisplay(1);
    } else if (event.key == "Enter" && !isNewOperationAdding()) {
        event.preventDefault();
        performInputOperation("=")
    }
}

const isNewOperationAdding = () => {
    return document.querySelector('.add_operation_box').style.display == 'block'
}

const hideNewOperationForm = () => {
    document.querySelector('.add_operation_box').style.display = 'none'
}

document.addEventListener('submit', event => {
    event.preventDefault()
    const form = new FormData(event.target);
    const identifier = form.get("identifier");
    const function_body = form.get("function_body");
    addNewButtonToButtonsBlock(identifier)
    addNewOperationFunction(identifier, function_body)

})

const addNewOperationFunction = (identifier, function_body) => {
    AvailableOperations[identifier] = eval(function_body)
    console.debug(AvailableOperations)
}

const addNewButtonToButtonsBlock = (identifier) => {
    let example = buttonsBlock.children[0]
    let new_button = example.cloneNode(true)
    new_button.innerHTML = identifier
    buttonsBlock.appendChild(new_button)
    isNewOperationAdding() ? hideNewOperationForm() : null
}

document.addEventListener('keypress', event => {
    const keyValue = event.key;
    if (!isNewOperationAdding()) {
        performInputOperation(keyValue);
    }
})
