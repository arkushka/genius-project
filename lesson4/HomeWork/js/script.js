// 1
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

function checkAge(age) {

    let check = age > 18 ? true : confirm('Батьки дозволили?');
    //let check = age > 18 || confirm('Батьки дозволили?');

    return check;
}

checkAge(19);

// 2
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b

function min(a, b) { 
    // if (a < b) return a;
    // return b;

    return a < b ? a : b;
}

console.log(min(7, 5));

// 3
//Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//  if (confirm(question)) yes();
//  else no();
// }
//  ask("Ви згодні?", function() { alert("Ви погодились."); },function() { alert("Ви скасували виконання."); )

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask("Ви згодні?", () => alert("Ви погодились."), () => alert("Ви скасували виконання."));
