// Створити телефонну книгу
// Створити початковий клас Abonent, де зберігатимуться ім * я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent { 

    constructor(name, number) { 
        this._name = name;
        this._number = number;
    }

    _name = null;
    _number = null;

    set number(value) { 
        this._number = value;
    }

    get number() { 
        return this._number;
    }
}

const Yuliia = new Abonent(
        "Yuliia",
        "12345"
);

const Andrii = new Abonent(
        "Andrii",
        "678910"
);

console.log(Yuliia.number);
Yuliia.number = '3333';
console.log(Yuliia.number);
console.log(Andrii.number);
