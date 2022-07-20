// С помощью прототипа реализовать структуру "Квадрат"
// которая будет наследоваться от структуры "Прямоугольник",
// должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр


const Rectangle = function (side_a, side_b) {
    const getPerimeter = function () {
        return 2 * (this.side_b + this.side_b)
    }

    const getArea = function () {
        return this.side_a * this.side_b
    }

    return {
        side_a: side_a,
        side_b: side_b,
        getPerimeter: getPerimeter,
        getArea: getArea,
    }
}

const Square = function (side_a, side_b) {
    this.__proto__ = new Rectangle(side_a, side_b)
}

let rect = new Rectangle(5, 2)
console.log(rect.getArea()); // 10
console.log(rect.getPerimeter()); // 8
console.log(rect)
console.log('--------')
let square = new Square(10, 10);
console.log(square)
console.log(square.getArea()); // 100
console.log(square.getPerimeter()); // 40

