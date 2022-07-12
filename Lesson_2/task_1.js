// Реализовать функцию, которая принимает текст,
//  и возвращает массив объектов со структурой
// { word: 'smth', length: 4, isCapitalized: false}

function  analyzeText(text) {
    let isCapitalized = function (word) {
        return word.charAt(0) === word.charAt(0).toUpperCase()
    }

    return text
        .replace(/[^a-zA-Za-åa-ö-w-я\s]/g, '')
        .split(' ')
        .filter((word) => word.length > 0)
        .map((word) => (
            { word: word, length: word.length, isCapitalized: isCapitalized(word) }
            )
        );
}

console.log(analyzeText('привет Мир Hello world! , . , 1, '))