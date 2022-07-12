// Выполнить преобразования с массивом сотрудников компании:
// 1. Узнать среднюю зарплату сотрудников
// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

const employees = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 54,
        salary: 10000,
        position: 'Architect'
    },
    {
        firstName: 'Gustav',
        lastName: 'Andersen',
        age: 31,
        salary: 5000,
        position: 'Software engineer'
    },
    {
        firstName: 'Liz',
        lastName: 'Taylor',
        age: 20,
        salary: 7000,
        position: 'Manager'
    }
]


let averageSalary = function (employees) {
    return employees
        .map((employee) => employee.salary)
        .reduce((total, emploee_salary) => total + emploee_salary) / employees.length
}


let sortBySalary = function (emploees) {
    return emploees.sort((a, b) => a.salary - b.salary)
}

let filterBySalaryAndAge = function (employees) {
    return employees.filter((employee) => employee.salary > 4500 && employee.age > 25)
}


function salaryStats(employees) {
    return {
        average_salary: averageSalary(employees),
        sorted_by_salary: sortBySalary(employees),
        filtered_by_salary_and_age: filterBySalaryAndAge(employees),
    }
}

console.log(salaryStats(employees))

