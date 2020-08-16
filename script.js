'use strict';

const now = new Date('2020-08-16');
// new Date.parse('2020-08-16');

console.log(now.setHours(40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset()); // разница с основным часовым поясом
// console.log(now.getTime()); // количество милисекунд с 01.01.1970

// засечь время выполнения цикла
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);