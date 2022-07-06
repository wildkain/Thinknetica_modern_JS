// Реализовать цикл перебирающий числа от одного до 20 и выводящий каждое четное значение на экран,
// реализация должна использовать все 3 вида циклов (отдельная реализация на каждый цикл)

function forEachEvenNumber() {
    for(let i = 1; i <= 20; i++) {
      if (i % 2 === 0) { console.log(i); }
    }
  }
  
  function whileEachEvenNumber() {
    let i = 1;
  
    while (i <= 20) {
      if (i % 2 === 0) { console.log(i); }  
      i++;
    }
  }
  
  function doEachEvenNumber() {
    let i = 1;
  
    do {
        if (i % 2 === 0) { console.log(i); }  
        i++;
    } while (i <= 20)
  }
