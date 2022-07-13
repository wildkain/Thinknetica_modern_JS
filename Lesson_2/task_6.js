// Реализовать функцию для перемешивания элементов массива

function arrayShuffle(array) {
    return array.sort(() => Math.round(Math.random()) - 0.5)
}

console.log(arrayShuffle([1, 2, 3, 4, 6, 7, 8, 9]))