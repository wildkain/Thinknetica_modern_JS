// Написать функцию для подсчета количества букв в слове

function lettterCount(word) {
  return word.replace(/[^a-zA-Z_]/g, '').length;
}
