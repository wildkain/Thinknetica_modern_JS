// Реализовать структуру данных для игры в шахматы
//
// Фигуры:
//
//     Все типы фигур: пешка, ладья, слон, конь, король, ферзь
//
// У каждой фигуры есть соответствующие методы и свойства:
//     Получить допустимые ходы
// Cодержит свойство своего цвета
// Для пешек присутствует флаг говорящий о том, что пешку можно превратить в любую другую фигуру, кроме короля.
//
//     Общие методы и свойства должны быть вынесены в родительский класс единый для всех фигур.
//     Поле
//
// Содержит координаты всех полей и состояние всего поля
// Содержит информацию о расположении всех фигур
//
//
// Игра
//
// Состояние игры: победа белого, победа черного, игра продолжается
//
// Хранит информацию о:
//     Список фигур, которые были убиты
// Чей сейчас ход
// Сколько ходов прошло с начала игры
// Всю историю ходов.
//
//
// Внимание! В этом задании не нужно реализовывать сам механизм игры, а только соотвествующие классы, их свойства и методы
class ChessPiece {
    constructor(color) {
        this.color = color;

    }

    getAvailableTurns() {
        console.log('Getting available turns...')
    }
}

class Pawn extends ChessPiece {
    constructor(color) {
        super(color)
        this.mutable = true
    }
}

class King extends ChessPiece {
}

class Queen extends ChessPiece {
}

class Rook extends ChessPiece {
}

class Bishop extends ChessPiece {
}

class Knight extends ChessPiece {
}


class BattleArea {
    constructor(coordinates) {
        this.coordinates = coordinates
        this.state = null
    }

    getCurrentPieceCoordinates() {

    }

}

class Game {
    constructor() {
        this.killedPieces = []
        this.turnCounter = 0
        this.turnHistory = []
        this.currentTurn = 'white'
    }

    get whoIsNext() {
        return this.currentTurn == 'white' ? 'black' : 'white'
    }

    get state() {
        this.calculate_state()
    }

    set state(state) {
        if (['BlackWins', 'WhiteWins', 'GameContinues'].includes(state)) {
            this.changeState(state);
        } else {
            throw  'Unsupported game state'
        }
    }


    changeState(state) {
        this._state = state
    }

    calculate_state() {
        // BlackWins ||  WhiteWins || GameContinues
    }
}


const figur = new King('black')
figur.getAvailableTurns()
console.debug(figur)

const game = new Game();

console.debug(game)
console.debug(game.state = 'GameContinues')


