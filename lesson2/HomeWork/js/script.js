// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

let value = 0;

value > 0 ? console.log(true) : console.log(false);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

let vary = "test"

if (vary.toLowerCase === "test") { console.log(true)}

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

let value2 = null;
if (value2 > 10) { console.log(value2 - 5); }
else { console.log(value2 + 5); }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

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



//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

