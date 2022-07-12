// Реализовать функцию для фильтрации массива по длине слов,
// значения длины указываются включительно, фильтр должен работать так:
// const fruits = ['lime', 'orange', 'apple', 'banana', '']
// filterByLength(fruits, 0, 5) // ['lime', 'apple', '']

let filterByWordLength = function (array, min_length, max_length) {
    return array.filter((el) => {
        return el.length >= min_length && el.length <= max_length;
    })
}

const fruits = ['lime', 'orange', 'apple', 'banana', '']

console.log(filterByWordLength(fruits, 0, 5))