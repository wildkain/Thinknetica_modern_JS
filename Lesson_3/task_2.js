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

    return function (value, degree) {

        if (value in cache && degree == cache[value]['degree']) {
            return {value: cache[value]['result'], fromCache: true}
        } else {
            let result = value ** degree
            cache[value] = {degree: degree, result: result};
            return {value: result, fromCache: false};
        }
    }
}

const calculate = cache();

console.log(calculate(3, 3));
console.log(calculate(2, 10));
console.log(calculate(2, 10));