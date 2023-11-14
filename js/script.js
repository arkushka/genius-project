// 1
 //____________________________________________________________________
// let a = Math.floor(Math.random() * (5 - 2) + 2);
// console.log(a);

// let name = "Yuliia";
// console.log(`Hello ${name}`);

// console.log(name.indexOf("i"));

// let person = {
//     name: "Yuliia",
//     age: 25,
//     children: false
// }

// console.log(person);

// 2
//_______________________________________________________________________
// const isConfirmed = confirm("Please confirm me!")
// console.log(isConfirmed);

// let name = prompt("Enter your name: ");
// console.log(name);

// let number = false;
// console.log(typeof number);

// let newNumber = String(number);
// console.log(typeof newNumber);
// console.log(newNumber);

// let veryNewNumber = Number(number);
// console.log(typeof veryNewNumber);
// console.log(veryNewNumber);

// console.log(Boolean(0));
// console.log(Boolean(""));

// console.log(Boolean(123));
// console.log(Boolean("Hi! My name is Yuliia"));

// console.log(5 ** 2); //5 в степені 2

// (2 + 2 != 4) ? console.log("1") : console.log("2");

// if (4 == 4) { console.log("4 == 4"); }
// else if (4 != 4) { console.log("4 != 4"); }
// else if (3 != 3) { console.log("3 != 3"); }
// else { console.log("it's a pitty!"); }

// let num = "123"
// switch (num) {
//     case "Num":
//         console.log("0");
//         break;
    
//     case "Number":
//         console.log("1");
//         console.log("Winner!");
//         break;
    
//     case 0:
//         console.log("Error");
//         break;
//     default:
//         console.log("Sorry!");
// }


// let minutes = prompt("Please enter your minutes: ");

// if (minutes >= 0 && minutes <= 15) { console.log("First quater."); }
// else if (minutes > 15 && minutes <= 30) { console.log("Second quater."); }
// else if (minutes > 30 && minutes <= 45) { console.log("Third quater."); }
// else { console.log("Fouth quater.")}


// let product = prompt("Enter your product: ").toLowerCase();
// let cost;

// switch (product) {
//     case "apple":
//         cost = 10;
//         break;
//     case "tomato":
//         cost = 2;
//         break;
//     case "meat":
//         cost = 100;
//         break;
//     default:
//         alert(`There is no ${product} product`);
// }
// if (cost > 0) { alert(`${product} costs ${cost} dollars.`); }
let num;

do {
    num = Number(prompt("Enter number from 100 to 999"));
} while (num < 100 || num >= 1000)

let stringNumber = String(num);

let firstNum = Number(stringNumber.substring(0, 1));
let secondNum = Number(stringNumber.substring(1, 2));
let thirdNum = Number(stringNumber.substring(2, 3));

let sum = firstNum + secondNum + thirdNum;
alert(sum);