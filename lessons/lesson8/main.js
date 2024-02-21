// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// let id = 1;
// function User(name, surname , email, phone){
//     this.id = id++;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// const users = [
//     new User('Vasya','Pup','vasao@',809565443221),
//     new User('Max','Pupik','maximus@',809565443222),
//     new User('Masha','Pupa','mashka@',809565443223),
//     new User('Vanya','Ben','vano@',809565443224),
//     new User('Tom','Pit','tom@',809565443225),
//     new User('Vova','Pupkin','vavan@',809565443226),
//     new User('Natali','Pupkina','nata@',809565443227),
//     new User('Vika','Ivanova','viktori@',809565443228),
//     new User('Oleg','Kim','olko@',809565443229),
//     new User('Vlad','Kukurudza','vladon@',809565443220),
// ]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter((user) => !(user.id% 2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((userA, userB) => userA.id - userB.id));

// ******

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// function Client ( name, surname , email, phone, order){
//     User.call(this, name, surname , email, phone)
//     this.order = order;
// }
// створити пустий масив, наповнити його 10 об'єктами Client
// const client= [
//     new Client('Vasya','Pup','vasao@',809565443221,['banana','apple','garlic','pear']),
//     new Client('Max','Pupik','maximus@',809565443222,['banana','carrot','pear']),
//     new Client('Masha','Pupa','mashka@',809565443223,['banana','carrot','apple','garlic']),
//     new Client('Vanya','Ben','vano@',809565443224,['banana','carrot','apple']),
//     new Client('Tom','Pit','tom@',809565443225,['carrot','apple','garlic','pear']),
//     new Client('Vova','Pupkin','vavan@',809565443226,['banana','pear']),
//     new Client('Natali','Pupkina','nata@',809565443227,['apple','garlic','pear']),
//     new Client('Vika','Ivanova','viktori@',809565443228,['banana','carrot','apple','garlic','pear']),
//     new Client('Oleg','Kim','olko@',809565443229,['pear']),
//     new Client('Vlad','Kukurudza','vladon@',809565443220,['banana','carrot','apple','pear']),
// ]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)
// console.log(client.sort((clientA, clientB) => clientA.order.length - clientB.order.length));

// ******

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// function Car (brand,manufacturer,year,maxSpeed,volume){
//     this.brand = brand;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
// }

// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// function drive(){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
// }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(brand, manufacturer, year, maxSpeed, volume, driver) {
//     this.brand = brand;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.driver = driver;
//     this.drive = function () {
//         return `їдемо зі швидкістю ${this.maxSpeed} км на годину`
//     }
//     this.info = function () {
//         for (const key in this) {
//             if(typeof this[key]==='function')continue;
//             console.log(`${key}-${JSON.stringify(this[key])}`);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         const speed = this.maxSpeed + newSpeed;
//         if (speed < 0) {
//             this.maxSpeed = 0;
//         } else {
//             this.maxSpeed = speed;
//         }
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (name, age, expiriens) {
//         this.driver = new Driver(name, age, expiriens)
//     }
// }
//
//  function Driver (name, age, expiriens) {
//     this.name = name;
//     this.age = age;
//     this.expiriens = expiriens;
// }
//
// const car1 = new Car('ford', 'mondeo', 2010, 260, 3);
// console.log(car1);
// console.log(car1.drive());
// car1.increaseMaxSpeed(50);
// car1.changeYear(2000);
// car1.addDriver('Anna', 50, 20);
// car1.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(brand, manufacturer, year, maxSpeed, volume, driver) {
//         this.brand = brand;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//         this.driver = driver;
//     }
//     drive() {
//         return `їдемо зі швидкістю ${this.maxSpeed} км на годину`
//     }
//     info() {
//         for (const key in this) {
//             console.log(`${key}-${JSON.stringify(this[key])}`);
//         }
//     }
//     increaseMaxSpeed(newSpeed) {
//         const speed = this.maxSpeed + newSpeed;
//         if (speed < 0) {
//             this.maxSpeed = 0;
//         } else {
//             this.maxSpeed = speed;
//         }
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriver(name,age,expiriens) {
//         this.driver = new Driver(name,age,expiriens)
//
//         // this.driver.push(new Driver(name,age,expiriens))
//     }
// }
// class Driver{
//     constructor(name,age,expiriens){
//         this.name = name;
//         this.age = age;
//         this.expiriens = expiriens;
//     }
// }
//
// const car1 = new Car('ford', 'mondeo', 2010, 260, 3);
// console.log(car1);
// console.log(car1.drive());
// car1.increaseMaxSpeed(50);
// car1.changeYear(2000);
// car1.addDriver('Anna',50,20);
// car1.info();

// ******

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// -Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// -Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends People {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}class Prince extends People {
    constructor(name, age, footSize) {
        super(name, age);
        this.bootSize = bootSize;
    }
}


const cinderellasArr = [
    new Cinderella('Olga', 45, 36),
    new Cinderella('Oleksandra', 25, 37),
    new Cinderella('Daria', 28, 39),
    new Cinderella('Melania', 19, 36),
    new Cinderella('Marfa', 26, 32),
    new Cinderella('Matrona', 75, 39),
    new Cinderella('Anna', 50, 34),
    new Cinderella('Kira', 18, 38),
    new Cinderella('Marina', 20, 40),
    new Cinderella('Masha', 14, 33)
];

const prince = new Prince('Ivan', 32, 42);


