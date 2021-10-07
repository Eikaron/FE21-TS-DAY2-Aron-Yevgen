class Person {
    name: string;
    age: number;
    rdm: number;

    constructor(name: string, age: number){ //! random is not part of parameters
        this.name = name;
        this. age = age;
        this.rdm = Math.random();
    }

    printData(){
        return `My name is ${this.name} and I am ${this.age} years old.`
        }
}


class Student extends Person {

    public grades: Array<number>;

    constructor(name: string, age: number, public grades: Array<number>){
        super(name, age); //Super takes values from parent class
        this.grades = grades;
    }

    printData(){
        return `My name is ${this.name} and I am ${this.age} years old and my grades are ${this.grades}.`
        }
}

let person1 = new Person("Aron", 29);

document.getElementById("Example").innerHTML = person1.printData();
(document.getElementById("Example2") as HTMLElement).innerHTML = person1.printData();

let student1 = new Student("Johanna", 30, [1,2,3,4,5]);

console.log(student1.printData());