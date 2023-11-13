//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name;
// let city;
// name = "Іван";
// city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // "Привіт 1"
// console.log(`привіт ${"name"}`); // "привіт name"
// console.log(`привіт ${name}`); // "привіт Olga"

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// console.log(typeof(Number(a)));
// console.log(typeof(parseInt(b)));
// console.log(typeof(parseFloat(c)));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// let rand = Math.floor(Math.random() * (4 - 2) + 2);
// console.log(rand);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

// console.log(message.length); //19

//***8**
//вивести в консоль message  великими літерами

// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// let person = {};
// додати туди ім*я, вік і місто
// person.name = "Yuliia";
// person.age = 25;
// person.city = "Kyiv";
// // вивести результат в консоль
// console.log(person);
// // видалити місто
// delete person.city;
// // додати буль з ключем: like flowers
// person["like flowers"] = true;
// // вивести результат в консоль
// console.log(person);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (key in person) { 
//     console.log(key);
//     console.log(person[key]);
// }