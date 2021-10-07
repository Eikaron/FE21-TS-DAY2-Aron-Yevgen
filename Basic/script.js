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
    function Person(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.printData = function () {
        return "Hello there, my name is " + this.name + ", I am " + this.age + " years old and I am a " + this.jobTitle + ". ";
    };
    Person.prototype.printData2 = function () {
        return this.printData() + ("I earn " + this.salary + "\u20AC every month and work in " + this.location + ".");
    };
    return Person;
}());
var BetterPerson = /** @class */ (function (_super) {
    __extends(BetterPerson, _super);
    function BetterPerson(name, age, jobTitle, salary, location) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.location = location;
        return _this;
    }
    return BetterPerson;
}(Person));
var person1 = new BetterPerson("Aron", 29, "Programmer", 3000, "Vienna");
document.getElementById("Example").innerHTML = person1.printData2();
//(document.getElementById("Example2") as HTMLElement).innerHTML = person1.printData();
