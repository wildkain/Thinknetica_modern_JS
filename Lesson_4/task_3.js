// . Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:
//
//     Есть следующее расширение объектов:
//     Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
//
// Есть следующий объект, в котором свойства лежат кучей:
const john_attrs = {
    name: "John",
    lastName: "Smith",
    position: "Senior engineer",
    startDate: "10.10.1990",
    endDate: "10.10.2000",
    baseSalary: "10000",
    salaryCurrency: "$",
    location: "Russia",
    department: "IT",
    phoneNumber: "+1234567890",
    eat: function () {
    },
    sleep: function () {
    },
    callFriend: function () {
    },
    writeReport: function () {
    },
    organizeMeeting: function () {
    },
    retire: function () {
    },
    startVacation: function () {
    }
};

const Human = function (attrs) {
    this.name = attrs.name
    this.lastName = attrs.lastName
    this.phoneNumber = attrs.phone
    this.eat = () => {
    }
    this.sleep = () => {
    }
    this.callFriend = () => {
    }
}

const Employee = function (attrs) {
    Object.setPrototypeOf(this, new Human(attrs))
    this.position = attrs.position
    this.department = attrs.department
    this.salaryCurrency = attrs.salaryCurrency
    this.baseSalary = attrs.baseSalary


}

const currentEmployee = function (attrs) {
    Object.setPrototypeOf(this, new Employee(attrs))
    this.startDate = attrs.startDate
    this.endDate = attrs.endDate
    this.location = attrs.location
    this.writeReport = () => {
    }
    this.organizeMeeting = () => {
    }
    this.startVacation = () => {
    }
    this.retire = () => {
    }
}

const johny_boy = new currentEmployee(john_attrs)

console.log(johny_boy.name);