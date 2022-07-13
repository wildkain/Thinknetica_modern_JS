// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент

let compareArrays = function (array_1, array_2) {
    // filter empty elements
    let filtered_array = function (array) {
        return array.filter(function (el) {
                return el != null;
            }
        )
    }

    // compare length
    if (filtered_array(array_1).length !== filtered_array(array_2).length) {
        return false;
    }

    return array_1.every((item, index) => (
        item === array_2[index])
    );
}


console.log(compareArrays([1, 2, '', 4], [1, 2, 'd', 4])) // assert false
console.log(compareArrays([1, 2, 3, 4], [1, 2, 3, 4])) // assert true
