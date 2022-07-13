// Реализовать функцию для сортировки массива чисел по убыванию
// const numbers = [-20, -10, 0, 10, 20, 30]
//
// sortDesc(numbers) // [30, 20, 10, 0, -10, -20]

let sortDesc = function (array_of_numbers) {
   return array_of_numbers.sort((a,b) => b - a)
}

const numbers = [-20, -10, 0, 10, 20, 30]

console.log(sortDesc(numbers))