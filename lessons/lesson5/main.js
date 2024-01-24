// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const sq = (a, b) => (a * b);
console.log(sq(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const x = (r) => (Math.PI * r ** 2);
console.log(x(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const sqCylinder = (r, H) => (2 * Math.PI * r * H);
console.log(sqCylinder(3, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент;
const element = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}
element([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const x1 = (text) => {
    document.write(`<p>${text}</p>`)
}
x1('Octen school');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const x2 = (tex) => {
    document.write('<ul>')
    document.write(`<li>${tex}</li>`)
    document.write(`<li>${tex}</li>`)
    document.write(`<li>${tex}</li>`)
    document.write('<ul>')
}
x2('OKTEN');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const x3 = (text, count) => {
    document.write('<ul>')
    {
        for (let i = 0; i < count; i++)
            document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
x3('kool', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const x4 = (arr) => {
    document.write(`<ol>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ol>`)
}
x4([1, 222, true, 'bam']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const x5 = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        document.write(`<div>name: ${arr[i].name} age: ${arr[i].age}</div>`)

    }
}
x5([
    {name: 'Masha', age: 10},
    {name: 'Misha', age: 11},
    {name: 'Olya', age: 12},
    {name: 'Tolya', age: 13},
]);

// - створити функцію яка повертає найменьше число з масиву
const min = (arr) => {
    let result = arr[0];
    for (let i = 1; i < result.length; i++) {
        if (result > arr[i]) {
            result = arr[i];
        }
    }
    return result
}
console.log((min([-9, 1, 8, 2, -7, -3])));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let result = 0;
    for (const item of arr) {
        result += item;
    }
    return result;
}
console.log(sum([1, 2, 10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const sum2 = (arr, index1, index2) => {
    let nam = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = nam
    return arr;
}
console.log(sum2([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value
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