// 7. Создать пустой объект и наполнить его данными:
// 1. Добавить свойство name и записать в него значение ‘Alex’
// 2. Добавить свойство lastName и записать в него значение ‘Smith’
// 3. Присвоить значение ‘Bob’ в свойство name
// 4. Удалить оба свойства

let myObject = {};
myObject['name'] = 'Alex'
myObject['lastName'] = 'Smith'
myObject['name'] = 'Bob'
delete (myObject['name']);
delete (myObject['lastName']);

console.log(myObject)
