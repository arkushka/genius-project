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

let number = 0;

do {
    number = Number(prompt("Enter number from 1 to 12"));
} while (number < 1 || number > 12)

switch (number) { 
    case 1:
        alert("January.");
        break;
    case 2:
        alert("February.");
        break;
    case 3:
        alert("March.");
        break;
     case 4:
        alert("April.");
        break;
     case 5:
        alert("May.");
        break;
     case 6:
        alert("June.");
        break;
     case 7:
        alert("July.");
        break;
     case 8:
        alert("August.");
        break;
     case 9:
        alert("September.");
        break;
     case 10:
        alert("October.");
        break;
     case 11:
        alert("November.");
        break;
     case 12:
        alert("December.");
        break;
    default:
        alert("I don't know.");
}