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
}

const thirdStudent = {
    name: "Victoria",
    speciality: "Telecomunication",
    avgGrade: 4.0,
    qtySkippesLessons: 5
}

firstStudent.showInfo();
firstStudent.showInfo.bind(secondStudent)();
firstStudent.showInfo.call(thirdStudent);
firstStudent.showInfo.apply(secondStudent);