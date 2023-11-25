// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

const firstStudent = {
    name: "Yuliia",
    speciality: "Computer engineering",
    avgGrade: 4.5,
    qtySkippesLessons: 1,
    showInfo: function () {
        console.group("Student info");
        console.log(`Name is ${this.name}.`);
        console.log(`Speciality is ${this.speciality}.`);
        console.log(`Average grade is ${this.avgGrade}.`);
        console.log(`Skipped lessons are ${this.qtySkippesLessons}.`);
        console.groupEnd();
    }
};

const secondStudent = {
    name: "Andrii",
    speciality: "Computer engineering",
    avgGrade: 5.0,
    qtySkippesLessons: 10
};

const thirdStudent = {
    name: "Victoria",
    speciality: "Telecomunication",
    avgGrade: 4.0,
    qtySkippesLessons: 5
};

// firstStudent.showInfo();
// firstStudent.showInfo.bind(secondStudent)();
// firstStudent.showInfo.call(thirdStudent);
// firstStudent.showInfo.apply(secondStudent);

// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

const explanation = {
    id: "htmlLabel",
    name: "Determination",
    text: "Explanation",
    showExplanation: function () {
        document.getElementById(this.id).innerHTML = `${this.name}. ${this.text}`;
    }
};

const htmlExplanation = {
    id: "htmlLabel",
    name: "HTML",
    text: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
};

const cssExplanation = {
    id: "cssLabel",
    name: "CSS",
    text: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)."
};

document.querySelector("#htmlBtn").addEventListener("click", explanation.showExplanation.bind(htmlExplanation));
document.querySelector("#cssBtn").addEventListener("click", explanation.showExplanation.bind(cssExplanation));

//3
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4


const banana = {
    name: "Banana",
    unitPrice: 30,
    weight: 4.5,
    shop: function () { 
        return { name: this.name, price: this.unitPrice * this.weight };
    }
};

const cherry = {
    name: "Cherry",
    unitPrice: 58,
    weight: 1.3
 };

const orange = {
    name: "Orange",
    unitPrice: 89,
    weight: 3.4
};

let bananaResult = banana.shop();
let cherryResult = banana.shop.bind(cherry)();
let orangeResult = banana.shop.bind(orange)();

// console.log(`The name of the product is ${bananaResult.name}, the price is ${bananaResult.price}. Thank you!`);
// console.log(`The name of the product is ${cherryResult.name}, the price is ${cherryResult.price}. Thank you!`);
// console.log(`The name of the product is ${orangeResult.name}, the price is ${orangeResult.price}. Thank you!`);


let resultArray = [bananaResult, cherryResult, orangeResult];

resultArray.forEach((el) => console.log(`The name of the product is ${el.name}, the price is ${el.price}. Thank you!`));