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

    let updateCache = function (value, degree, result) {
        let results = cache[value]?.results || []
        results.push({degree, result})
        cache[value] = { results }
    }

    return function (value, degree) {
        if (value in cache && degree == cache[value]?.results?.find(r => r.degree == degree)?.degree) {
            let result = cache[value]?.['results']?.find(r => r.degree == degree).result
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