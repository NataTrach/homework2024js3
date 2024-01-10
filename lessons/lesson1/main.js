// - Створити змінні. Присвоїти кожному з них значення:
//     'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a = 'hello';
console.log(a);

let b = 'owu';
console.log(b);

let c = 'com';
console.log(c);

let d = 'ua';
console.log(d);

let e = 1;
console.log(e);

let f = 10;
console.log(f);

let g = -999;
console.log(g);

let h = 123;
console.log(h);

let i = 3.14;
console.log(i);

let j = 2.7;
console.log(j);

let k = 16;
console.log(k);

let l = true;
console.log(l);

let m = false;
console.log(m);


//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Natali';
let middleName = 'Fedorivna';
let lastName = 'Trach';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

let res = firstName+' '+ middleName+' '+ lastName;
console.log(res);


//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let aaa = 100;
console.log(typeof aaa);

let bbb = '100';
console.log(typeof bbb);

let ccc = true;
console.log(typeof ccc);


//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//  та вивести в консоль
//
//

let firstName1 = prompt('enter firstName');
let middleName1 = prompt('enter middleName');
let age = prompt('enter age');

let result = `${firstName1} ${middleName1} ${age}`;
console.log(result);

