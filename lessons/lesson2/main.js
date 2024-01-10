// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

//  let arr = [1,2,3,4,true,false,'cat','dog','big','boss'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title : 'Wiking',
//     pageCount : 123,
//     genre : 'roman'
// };
// console.log(book1);
//
// let book2 = {
//     title : 'Wiking2',
//     pageCount : 122,
//     genre : 'roman'
// };
// console.log(book2);
//
// let book3 = {
//     title : 'Wiking3',
//     pageCount : 143,
//     genre : 'roman'
// };
// console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let book10 = {
//     title: 'Wiking',
//     pageCount: 123,
//     genre: 'roman',
//     authors: [{
//         name: 'Ben',
//         age: 33
//     },
//         {
//             name: 'Tom',
//             age: 44
//         }
//     ]
// };
// console.log(book10);
//
// let book12 = {
//     title: 'Wiking2',
//     pageCount: 122,
//     genre: 'roman',
//     authors: [{
//         name: 'Bob',
//         age: 33
//     },
//         {
//             name: 'Tod',
//             age: 44
//         }
//     ]
// };
// console.log(book12);
//
// let book33 = {
//     title: 'Wiking3',
//     pageCount: 143,
//     genre: 'roman',
//     authors: [{
//         name: 'Bon',
//         age: 33
//     },
//         {
//             name: 'Bim',
//             age: 44
//         }
//     ]
// };
// console.log(book33);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

// let users  = [
//     {name:'Anna',username:'cdtrdt56f',password:43323},
//     {name:'Inna',username:'gvf76cchgghh',password:3445555},
//     {name:'Olga',username:'gfc44fdfgv',password:654321},
//     {name:'Kira',username:'ftrdrt45drd',password:445556},
//     {name:'Tom',username:'gc56ftrdr',password:765543},
//     {name:'Bim',username:'hbh44fty',password:3444555},
//     {name:'Bom',username:'ftrrt66r',password:22223333},
//     {name:'Ted',username:'fvt87rrdtr',password:8877777},
//     {name:'Sem',username:'fvt88rdrdtr',password:9888777},
//     {name:'Jim',username:'ytf55yttr',password:1223444}
// ];
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);


//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 0;
// if (x!==0){
//     console.log('Virno');
// }else {
//     console.log('Ne virno');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 13;
// if(time>0 && time<=15){
//     console.log('1');
// }else if(time>15 && time<=30){
//     console.log('2');
// }else if(time>30 && time<=45){
//     console.log('3');
// }else if(time>45 && time<=59){
//     console.log('4');
// }else {
//     console.log('What?');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = 25;
// if(day>0 && day<=10){
//     console.log('1');
// }else if(day>10 && day<=20) {
//     console.log('2');
// }else if(day>20 && day<=31) {
//     console.log('3');
// }else {
//     console.log('???');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let dayweek = 4;
// switch (dayweek) {
//     case 1:
//         console.log('1')
//         break;
//     case 2:
//         console.log('2')
//         break;
//     case 3:
//         console.log('3')
//         break;
//     case 4:
//         console.log('4')
//         break;
//     case 5:
//         console.log('5')
//         break;
//     case 6:
//         console.log('6')
//         break;
//     case 7:
//         console.log('7')
//         break;
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = 5;
// let b = 8;
//
// if (a>b){
//     console.log('a');
// }else if (b>a){
//     console.log('b');
// }else if(a===b){
//     console.log('=');
// }

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = 3;
// let res = 3 || false;
// console.log(res);


//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray[0].monthDuration > 5){
//     console.log('super');
// }
// if(coursesAndDurationArray[1].monthDuration > 5){
//     console.log('super');
// }
// if(coursesAndDurationArray[2].monthDuration > 5){
//     console.log('super');
// }
// if(coursesAndDurationArray[3].monthDuration > 5){
//     console.log('super');
// }
// if(coursesAndDurationArray[4].monthDuration > 5){
//     console.log('super');
// }
// if(coursesAndDurationArray[5].monthDuration > 5){
//     console.log('super');
// }
