// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sRectangle(a,b) {
    return a*b;
}
console.log(sRectangle(2, 4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCircle(PI,r) {
    return PI*r*2;
}
console.log(sCircle(3.14,2));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCylinder(PI,r,H) {
    return 2*PI*r*H;
}
console.log(sCylinder(3.14,2,4));


// - створити функцію яка приймає масив та виводить кожен його елемент
let arr=[1,2,3,4,5];
function arrEl(arr) {
        document.write(`<div>`);
        document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
        document.write(`</ul>`);
        document.write(`</div>`);
}
arrEl(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function bar(text){
    document.write(`<p>${text}</p>`);
}
bar('bam,bam,bam');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function foobar(text){
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
foobar('Octen school');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function foo(text,count){
    document.write(`<ul>`);
    for (let i = 0; i <count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
foo('octen',5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [1,2,true,'hi'];
function f(array) {
    document.write(`<ol>`);
    for (const arrElement of array){
        document.write(`<li>${arrElement}</li>`);
}
    document.write(`</ol>`);
}
f(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.
let arrObject = [{id:1,name:'Oleg',age:5},{id:2,name:'Vova',age:20}];
function f1(arrObject) {
    for (const item of arrObject) {
        document.write(`<div>${item.id}.${item.name}-${item.age}</div>`);
    }
}
f1(arrObject);


// - створити функцію яка повертає найменьше число з масиву

function minNum(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if(min > number){
            min = number
        }
    }
    return min;
}
console.log(minNum([1, 2, 3, 4, -1, -2, -3, -4, -5]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
function sum(numbers){
    let sumNam = 0;
    for (const number of numbers) {
        sumNam += number;
    }
    return sumNam;
}

console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44] swap=[11,22,33,44];
function swap(arr,index1,index2) {
let a = arr[index1];
arr[index1] = arr[index2];
arr[index2] = a;
return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(uah,currencies,exitCurrency){
    for (const item of currencies) {
        if (item.currency === exitCurrency) {
        return uah / item.value;
    }
    }
}

console.log(exchange(
    10000,
    [
        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42}
    ],
    'USD'
));


/////////////////////////////////////////////
// zamikannia//
// function fz(id,name,age) {
//     let user= {id,name,age};
//     return{
//         getId(){
//             return user.id
//         },
//         getName(){
//             return user.name
//         },
//         getAge(){
//             return user.age
//         }
//     }
// }
// let fz2 = fz(1,'Anna',45);
// console.log(fz2.getId());
// console.log(fz2.getName());
// console.log(fz2.getAge());