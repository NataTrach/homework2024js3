// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок
// з вашим об'єктом
// 1***
// const form = document.forms.creator;
// form.onsubmit = function (e) {
//     e.preventDefault();
//     if (!this.name.value || this.name.value.length < 3){
//         return alert('Wrong name');
//     }
//     const wrapper = document.createElement('div');
//     const name = document.createElement('div');
//     const surname = document.createElement('div');
//     const age = document.createElement('div');
//
//     name.innerText = `Name : ${this.name.value}`;
//     surname.innerText = `Surname : ${this.surname.value}`;
//     age.innerText = `Age : ${this.age.value}`;
//
//     wrapper.append(name,surname,age);
//     document.body.appendChild(wrapper);
// }

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1
// 2***
// const count = localStorage.getItem('count') || 0;
// const element = document.getElementById('count');
// const newCount = (+count + 1).toString() ;
// element.innerText = newCount;
// localStorage.setItem('count', newCount);

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// 3***
const json = localStorage.getItem('sessions');
const sessions = json ? JSON.parse(json) : [];

sessions.push({
    date: new Date().toISOString(),
    appCodeName: navigator.appCodeName,
    appVersion: navigator.appVersion
});
localStorage.setItem(`sessions`,JSON.stringify(sessions))

for (const session of sessions) {
    const wrapper = document.createElement('div');
    const date = document.createElement('div');
    const time = document.createElement('div');
    const devise = document.createElement('div');

    wrapper.classList.add('wrapper','item');
    const dateObj = format(session.date);

    date.innerText = `Date: ${dateObj.DD}/${dateObj.MM}/${dateObj.YYY}`;
    time.innerText = `Time: ${dateObj.hh}:${dateObj.mm}:${dateObj.ss}`;
    devise.innerText = `Devise: ${session.appCodeName}/${session.appVersion}`;

    wrapper.append(date,time,devise);
    document.body.appendChild(wrapper);
}
function format(dateString){
    const YYY = new Date(dateString).getFullYear().toString();
    const MM = (new Date(dateString).getMonth()+1).toString();
    const DD = new Date(dateString).getDay().toString();
    const hh = new Date(dateString).getHours().toString();
    const mm = new Date(dateString).getMinutes().toString();
    const ss = new Date(dateString).getSeconds().toString();
    return{
        YYY:YYY,
        MM:MM,
        DD:DD,
        hh:hh,
        mm:mm,
        ss:ss
    }
}


// =========================
// - зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
//
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається