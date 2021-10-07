class Person {
    name: string;
    age: number;
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string){ 
        this.name = name;
        this. age = age;
        this.jobTitle = jobTitle;
    }

    printData(){
        return `Hello there, my name is ${this.name}, I am ${this.age} years old and I am a ${this.jobTitle}. `
        }

    printData2(){
        return this.printData()+`I earn ${this.salary}€ every month and work in ${this.location}.`
    }    
}


class BetterPerson extends Person {

    salary: number;
    location: string;

    constructor(name: string, age: number, jobTitle: string, salary: number, location: string){
        super(name,age,jobTitle); //Super takes values from parent class
        this.salary = salary;
        this.location = location;
    }
}

let person1 = new BetterPerson("Aron", 29, "Programmer", 3000, "Vienna");

document.getElementById("Example").innerHTML = person1.printData2();
//(document.getElementById("Example2") as HTMLElement).innerHTML = person1.printData();