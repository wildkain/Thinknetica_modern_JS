// . Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:
//
//     Есть следующее расширение объектов:
//     Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
//
// Есть следующий объект, в котором свойства лежат кучей:
// const john = {
//     name: "John",
//     lastName: "Smith",
//     position: "Senior engineer",
//     startDate: "10.10.1990",
//     endDate: "10.10.2000",
//     baseSalary: "10000",
//     salaryCurrency: "$",
//     location: "Russia",
//     department: "IT",
//     phoneNumber: "+1234567890",
//     eat: function() {},
//     sleep: function() {},
//     callFriend: function() {},
//     writeReport: function() {},
//     organizeMeeting: function () {},
//     retire: function () {},
//     startVacation: function () {}
// };

const Human = function () {
    return  {
              name: "John",
              lastName: "Smith",
              phoneNumber: "+1234567890",
              eat: () => {},
              sleep: () => {},
              callFriend: () => {},


    }
}

const Employee  = function (){
    this.__proto__ = new Human();
    return {
        retire: function () {},

    }
}

const currentEmployee = function () {
    this.__proto__ = new Employee();
    return {
        position: "Senior engineer",
        department: "IT",
        salaryCurrency: "$",
        baseSalary: "10000",
        startDate: "10.10.1990",
        endDate: "10.10.2000",
        location: "Russia",
        writeReport: function() {},
        organizeMeeting: function () {},
        startVacation: function () {},
    }
}

const john = new currentEmployee()

console.log(john.name);