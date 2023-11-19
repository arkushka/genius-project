// functions

// function declaration

// function showMessage(name, city) {
//     console.log("Hello, my name is " + name +". I'm from " + city + ".");
// }

// showMessage("Yuliia", "Kyiv");

// function expression

// const userName = "Ann"

// const sayHi = function () {
//     let message = "Hello, my name is " + userName + "!"
//     console.log(message);
// }

// sayHi();

// return value from the function

// 1
// function sum(a, b) {
//     let c = a + b;
//     return c;
// }

// let result = sum(7, 8);
// console.log(result);

//

// const testFunction = function (a, b) {
//     console.log("a:" + a);
//     console.log("b:" + b);

//     return;
// }

// testFunction();

// 2

// function checkAge(age) {
//     if (age > 18) {
//         return console.log("Hello!");
//     } //else {
//     //     console.log("Bye!");
//         // }
//      console.log("Bye!");
// }

// checkAge(12);
// checkAge(21);

// 3

// function showMovie(age) {
//     if (age < 21) { return; }
//     return console.log("You need to go to the cinema");
// }

// showMovie(22);

// порядок виконання коду

// const a = function () {
//     c();
//     console.log("A");
//     b();
// }

// const b = function () {
//     console.log("B");
// }

// const c = function () {
//     console.log("C");
// }

// a();

// arguments

// const addName = function () {
//     const arg = Array.from(arguments);
//     console.log(arguments);
//     console.log(arg);

// }

// addName(1,2,3);

// rest

// const addName = function (...arg) {
//     console.log(arg);
// }

// addName(1,2,3);

// callback

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

// function showOk() {
//     console.log("You said ok.");
// }

// function showCancel() {
//     console.log("You said No.");
// }

// ask("Yes or no?", showOk, showCancel);\

// high order function (HOF)

// const hello = function (name) {
//     console.log(`Hello ${name}!`);
// }

// const search = function (callback) {
//     const name = "Yuliia";
//     callback(name);
// }

// search(hello);
// hello("Ann");

// lyamda expression (стрілочні функції)

// 1

// const test = (arg) => {
//     console.log(arg);
// }

// test("Hi!");

// 2

// const showMovie = (age) => {
//     if (age < 21) { return; }
//     return console.log("You need to go to the cinema");
// }

// showMovie(21);

// 3

//console.log(document);

// const addNumber = (number) => { 
//     let result = +number + 10;
//     return console.log(result);
// }

// const numberRef = document.querySelector('input[name="number"]');
// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", () => addNumber(numberRef.value));

// buttonRef.addEventListener("click", () => {
//     //console.log("Click was made.");
//     console.log(numberRef.value);
// });

// console.log(numberRef.value);
// console.log(buttonRef);

