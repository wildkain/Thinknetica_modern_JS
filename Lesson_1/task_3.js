// Написать функцию для реверсии слова не используя встроенные методы

function reverseWord(word) {
    var reversed_word = '';
  
    for(let i = word.length - 1; i >= 0; i--) {
      reversed_word += word[i];
    };
  
    return reversed_word;
};

  