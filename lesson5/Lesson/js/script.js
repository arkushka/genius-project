//замикання

//1
// function createNewSumm(n) {
//     return function () {
//         console.log(10 * n);
//      }
// }

// //createNewSumm();
// const calc = createNewSumm(5);
// calc();

//2
// function createNewNumber(n) {
//     return function (m) {
//         return n + m;
//     }
// }

// const addFive = createNewNumber(5);
// console.log(addFive(10));

//3

// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = createUrl("com");
// const comUa = createUrl("ua");

// console.log(comUrl("google"));
// console.log(comUrl("fb"));

// console.log(comUa("google"));
// console.log(comUa("fb"));

//_________________________//
//_________________________//
//this

//1
// function hello() {
//   console.log("hello", this);
// }

// hello();

// const user = {
//   name: "Ivan",
//   city: "Odesa",
//   sayHello: hello,
// };

// user.sayHello();
//-----

//2
// function abc() {
//   console.log("В функції");
//   console.log(this);
// }

// abc();

// document.querySelector("p").onclick = abc;

//3
// function changeColor() {
//     //console.log(this);
//     this.style.background = "green";
// }

// // document.querySelector("div").onclick = changeColor;

// let user = document.querySelectorAll("div");

// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

//----------- lyamda do not work with this

// const showList = () => {
//   console.log(this);
// };

//  showList();

// const list = {
//   names: ["Ann", "Olga", "Nata"],
//   showList: showList,
// };

// list.showList();

//========= bind

//1
// function hello() {
//   console.log(this);
// }

// const user = {
//   name: "Ivan",
//   age: 30,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };

// user.info("Zvenyhorodka");

// const Ann = {
//   name: "Anna",
//   age: 23,
// };

// const Nata = {
//   name: "Natalia",
//   age: 50,
// };

// user.info.bind(Ann)("Kyiv");
// user.info.bind(Nata, "Lviv")();

// const nataInfo = user.info.bind(Nata, "Odesa");
// nataInfo();

//========= call

// const userInfo = {
//   name: "name",
//   age: 98,
//   logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// userInfo.logInfo();

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// userInfo.logInfo.call(Vano, "developer");

//========= apply

// const showUserInfo = {
//   name: name,
//   age: 87,
//   logInfo: function (job, city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// showUserInfo.logInfo.apply(Vano, ["developer", "Lviv"]);

///////////////////////////////////
/////////////////////////////////// Practics

// 1
// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: "Bukovel" };
// const Turist = { hotel: "Turist" };

// message.call(Bukovel, "Ivan", "5");
// message.call(Turist, "Ivan", "3");

// message.apply(Bukovel, ["Ivan", "5"]);
// message.apply(Turist, ["Ivan", "3"]);

// message.bind(Bukovel, "Ivan", "5")();
// message.bind(Turist, "Ivan", "3")();

////////

//2
// const cart = {
//   showItems() {
//     console.log("In cart: ", this.items);
//   },
// };

// const woman = {
//   items: ["Сукня, туфлі"],
// };

// const man = {
//   items: ["Костюм, рубашка"],
// };

// const child = {
//   items: ["майка, шорти"],
// };

// cart.showItems.bind(man)();

// document.querySelector("#wom").addEventListener("click", cart.showItems.bind(woman));

// document.querySelector("#man").addEventListener("click", cart.showItems.bind(man));

// document.querySelector("#kid").addEventListener("click", cart.showItems.bind(child));
// ////

// const infoCar = {
//   name: "BMW",
//   model: "M7",
//   color: "white",
//   showInfo: function () {
//     console.log(
//       "Car: " + this.name + " model: " + this.model + " color: " + this.color
//     );
//   },
// };

// car2 = {
//   name: "Opel",
//   model: "XXX",
//   color: "red",
// };

// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);
