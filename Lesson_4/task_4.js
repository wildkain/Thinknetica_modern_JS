// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей.
//
//  Проверка типа корабля должна осуществляться путем сравнения прототипа.
//  Для моторных кораблей доступны следующие специфичные характеристики:
//     Мощность двигателя
//     Материал корпуса
//
// Для парусных кораблей доступны следующие специфичные характеристики:
//     Количество мачт
//     Общая площадь парусов
//
// Что можно делать в верфи:
// Строить корабли - только своего типа
// Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
//
// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы.
// Задание потребует воспользоваться гуглом для решения.
//
// Верфи и корабли должны создаваться с помощью функций-конструкторов.

const SailingShip = function (attrs) {
    this.number_of_masts = attrs.number_of_masts
    this.sailing_area = attrs.sailing_area
}

const EngineShip = function (attrs) {
    this.engine_power = attrs.engine_power
    this.material = attrs.material
}


const commonShipyard = function () {
    this.repairShip = function (ship) {
        if (Object.getPrototypeOf(ship) == Object.getPrototypeOf(this.buildShip(ship))) {
            console.log("Repairing ship...")
        } else {
            console.log('Error: [Wrong ship type]')
        }
    }
    this.repaintShip = function (ship) {
        console.log(`Repaint... ${ship.type}`)
    }
    this.changeShip = function (ship) {
        let result;
        if (Object.getPrototypeOf(ship) == Object.getPrototypeOf(this.buildShip(ship))) {
            result = this.buildShip(ship)
        } else {
            result = console.log('Error: [Wrong ship type]')
        }

        return result
    }
}

const SailingShipyard = function () {
    Object.setPrototypeOf(this, new commonShipyard())

    this.buildShip = function (specific_ship_attrs) {
        this.ship_attrs['number_of_masts'] = specific_ship_attrs.number_of_masts
        this.ship_attrs['sailing_area'] = specific_ship_attrs.sailing_area
        return new SailingShip(this.ship_attrs)
    }

    this.ship_attrs = {type: 'SailingShip'}
}

const EngineShipyard = function () {
    Object.setPrototypeOf(this, new commonShipyard())

    this.buildShip = function (specific_ship_attrs) {
        this.ship_attrs['engine_power'] = specific_ship_attrs.engine_power
        this.ship_attrs['material'] = specific_ship_attrs.material
        return new EngineShip(this.ship_attrs)
    }

    this.ship_attrs = {type: 'EngineShip'}
}


let sailing_shipyard = new SailingShipyard();
let engine_shipyard = new EngineShipyard();

let sailing_ship = sailing_shipyard.buildShip({number_of_masts: 5, sailing_area: 100})
let engine_ship = engine_shipyard.buildShip({engine_power: 10000, material: 'steel'})
console.debug(sailing_ship)
console.log(sailing_shipyard.repaintShip(sailing_ship))

console.log(engine_shipyard.repairShip(engine_ship))
console.log(engine_shipyard.repairShip(sailing_ship))
console.log(sailing_shipyard.changeShip(sailing_ship))
