// 2. Кэширование
//
// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.
//
// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат.
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно
//
// Пример:
//     const calculate = cache();
//
// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true}

const cache = () => {
    let cache = {};
    // Cтруктура {3: { 2: result }}

    let updateCache = function (value, degree, result) {
        cache[value] = cache[value] || {}
        cache[value][degree] = result
    }

    return function (value, degree) {
        if (value in cache && degree in cache[value]) {
            let result = cache[value][degree]
            return { value: result, fromCache: true}
        } else {
            let result = value ** degree
            updateCache(value, degree, result)
            return {value: result, fromCache: false};
        }
    }
}

const calculate = cache();

console.log(calculate(3, 3)); // {value: 27, fromCache: false}
console.log(calculate(3, 3)); // {value: 27, fromCache: true}
console.log(calculate(3, 2)); // {value: 9, fromCache: false}
console.log(calculate(3, 3)); // {value: 27, fromCache: true}