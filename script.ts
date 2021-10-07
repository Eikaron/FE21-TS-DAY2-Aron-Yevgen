class Person {
    name: string;
    age: number;
    rdm: number;

    constructor(name: string, age: number){
        this.name = name;
        this. age = age;
        this.rdm = Math.random();
    }

    printData(){
        return `My name is ${this.name} and I am ${this.age} years old.`
        }
}


class Student extends Person {

    grades: Array<number>;
    
    constructor(name: string, age: number){
        super(name, age); //Super takes values from parent class
        this.grades = grades;
    }
}

let person1 = new Person("Aron", 29);

document.getElementById("Example").innerHTML = person1.printData();