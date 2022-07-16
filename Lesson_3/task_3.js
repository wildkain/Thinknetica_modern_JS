// 3. Калькулятор
//
// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат,
// по умолчанию должны присутствовать методы add, substract
//
// Пример:
//     const calculator = new Calc()
//
// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5
//
// Также, он должен хранить историю всех операций и выводить ее по запросу:
//
//     calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*',
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */
//
// И очищать историю
// calculator.clearHistory()
// calculator.history()

const Calc = function () {
    let history = []
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    const addOperation = (operand, func) => {
        operations[operand] = func
    }

    const getHistory = () => {
        return history
    }

    const addToHistory = (operation, operands) => {
        history.push({operation: operation, operands: operands})
    }

    const clearHistory = () => {
        history = []
    }

    const runOperation = (operation_string) => {
        full_operations = operation_string.split(' ');
        operand_1 = full_operations[0];
        operation = full_operations[1];
        operand_2 = full_operations[2];

        addToHistory(operation, [operand_1, operand_2]);

        return console.log(operations[operation](Number(operand_1), Number(operand_2)));
    }

    return {
        operation: runOperation,
        history: getHistory,
        addOperation: addOperation,
        clearHistory: clearHistory,
    }
}

const calculator = new Calc()
calculator.history;
calculator.operation('1 + 2') //
calculator.addOperation('/', (a, b) => a / b)
calculator.operation('10 / 2') // 5
console.log(calculator.history());
calculator.clearHistory()
console.log(calculator.history());
