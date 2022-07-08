/**
 5. Реализовать if для проверки доступа
Выполняется проверка прав доступа пользователя к сайту при соблюдении следующих условий:
1. Возраст от 18 до 35 лет
2. Оплачена месячная подписка
3. Не действует блокировка
4. Имя пользователя не содержит внутри себя запрещенные слова
Если пользователь является администратором, для получения доступа достаточно соблюдения только первого условия
Информация о пользователе хранится в объекте такого вида:
{
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}
 */

function userIsAllowed(user_data) {
    if (user_data['isAdmin'] && user_data['age'] >= 18 && user_data['age'] <= 35) {
      return true
    } else if (user_data['age'] >= 18 && user_data['age'] <= 35 && user_data['paid'] && !user_data['blocked'] && !user_data['badUsername']) {
      return true
    } else {
      return false
    }
  }
  