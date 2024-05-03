// Symbol.iterator - спеціальна функція для обходу елементів коллекції
/*
  - for ... of
  - spread operator
  - rest operator
  - деструктуризація
  
  приклад ітератора:

  const arr1 = [1,2,3,4]
  const iterator = arr1[Symbol.iterator]()
*/

/*
  Генератор - особлива функція, яка має можливість призупиняти своє виконання
              і повертати певні проміжні результати
*/

function notGenerator() {
  console.log('notGen - 1');
  console.log('notGen - 2');
  console.log('notGen - 3');
}

const notGenResult = notGenerator();
console.log(notGenResult);

function* generator() {
  console.log('Generator - 1');
  yield 'some value'; // ключове слово, ставить роботу генератора на паузу
  console.log('Generator - 2');
  yield 10; // використовується для  повернення проміжних результатів
  console.log('Generator - 3');
  yield Math.random();

  return 'end';
  console.log('Generator - 4');
}

const genResult = generator();
// об'єкт генератора, у прототипах є методи для запуску самого генератора (next)

const nextRes = genResult.next();
console.log(nextRes);
console.log(genResult.next());
// genResult.next();
// const nextRes2 = genResult.next();
// console.log(nextRes2);
console.log(genResult.next());
console.log(genResult.next());
console.log(genResult.next());
console.log(genResult.next());
console.log(genResult.next());
console.log(genResult);

function* generatorExample2() {
  try {
    if (Math.random() > 0.5) throw new Error('something bad happened');
  } catch (error) {
    console.log('oh no');
  }
}

const iter1 = generatorExample2();
const iter2 = generatorExample2();
const iter3 = generatorExample2();

iter1.next();
iter2.next();
iter3.next();

function * numbersGenerator (maxNumber = 100) {
  try {
    let num = 1;

    while(num <= maxNumber) {
      yield num++;
    }

  } catch (err) {
    console.log('bad stuff')
  }
}

const numIterator = numbersGenerator();

for (const num of numIterator) {
  console.log(num);

  if( num > 20 ) {
    // numIterator.return(); // досторокове завершення роботи генератора
    numIterator.throw();
  }
}