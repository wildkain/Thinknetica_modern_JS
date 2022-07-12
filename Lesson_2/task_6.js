// Реализовать функцию для перемешивания элементов массива

function arrayShuffle(array) {
    return array.sort(() => Math.round(Math.random()) * 2 - 1)
}

console.log(arrayShuffle([1, 2, 3, 4, 6, 7, 8, 9]))