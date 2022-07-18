// Модифицировать прототип Array,
// добавив в него метод shuffle,
// чтобы получить возможность выполнять случайную сортировку для любого массива
let arr = [1,2,3,4,5]

let shuffleFunction = function() {
    return  this.sort(() => Math.round(Math.random()) - 0.5)
}

Array.prototype.shuffle = shuffleFunction
console.log(arr.shuffle())