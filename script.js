var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.rdm = Math.random();
    }
    Person.prototype.printData = function () {
        return "My name is " + this.name + " and I am " + this.age + " years old.";
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grades) {
        var _this = _super.call(this, name, age) || this;
        _this.grades = grades;
        _this.grades = grades;
        return _this;
    }
    Student.prototype.printData = function () {
        return "My name is " + this.name + " and I am " + this.age + " years old and my grades are " + this.grades + ".";
    };
    return Student;
}(Person));
var person1 = new Person("Aron", 29);
document.getElementById("Example").innerHTML = person1.printData();
document.getElementById("Example2").innerHTML = person1.printData();
var student1 = new Student("Johanna", 30, [1, 2, 3, 4, 5]);
console.log(student1.printData());
