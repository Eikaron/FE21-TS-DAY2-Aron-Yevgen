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
var Vehicles = /** @class */ (function () {
    //rdm: number = Math.random();
    //rdm: number = toString(Math.random());
    function Vehicles(brand, model, fuel, avlbColor, img, seats, year, km) {
        this.brand = brand;
        this.model = model;
        this.fuel = fuel;
        this.avlbColor = avlbColor;
        this.img = img;
        this.seats = seats;
        this.year = year;
        this.km = km;
    }
    Vehicles.prototype.printInfo = function () {
        document.getElementById("printhere").innerHTML += "\n        <div class=\"col m-2\">\n        <div class=\"card\" style=\"width: 20rem; height: 40rem\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" style=\"height: 200px\" alt=\"Car\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\" style=\"heigh: 3rem\">" + this.brand + " " + this.model + " (" + this.year + ") </h5>\n          <p class=\"card-text\" style=\"height: 1rem\">Some generic description I'm too lazy to write.</p>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n        <hr>\n          <li class=\"list-group-item\">Number of seats: " + this.seats + "</li>\n          <li class=\"list-group-item\">Type of Fuel: " + this.fuel + "</li>\n          <li class=\"list-group-item\">Kilometers: " + this.km + "</li>\n          <li class=\"list-group-item\">Available Colors: " + this.avlbColor + "</li>\n        </ul>\n        <div class=\"card-body\">\n            <button type=\"button\" id=\"" + this.rdm + "\" class=\"btn btn-primary\"> Show Price </button>\n        </div>\n      </div>\n      <div>";
        /*     let allbuttons = document.getElementsByClassName(`btn`);
    
            for (let i = 0; i < allbuttons.length; i++){
                allbuttons[i].addEventListener("click", function(){
                    alert("Test");
              });
            } */
        document.getElementById(this.rdm).addEventListener("click", function () {
            console.log("test");
        });
    };
    return Vehicles;
}());
var tinyCar = /** @class */ (function (_super) {
    __extends(tinyCar, _super);
    function tinyCar(brand, model, fuel, avlbColor, img, seats, year, km) {
        var _this = _super.call(this, brand, model, fuel, avlbColor, img, seats, year, km) || this;
        _this.seats = 2;
        return _this;
    }
    return tinyCar;
}(Vehicles));
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(brand, model, fuel, avlbColor, img, seats, year, km) {
        var _this = _super.call(this, brand, model, fuel, avlbColor, img, seats, year, km) || this;
        _this.avlbColor = ["Standard"];
        if (seats > 2) {
            _this.seats = 1; //Motorbikes don't have more than two seats
        }
        return _this;
    }
    return Motorbikes;
}(Vehicles));
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(brand, model, fuel, avlbColor, img, seats, year, km, capacity) {
        var _this = _super.call(this, brand, model, fuel, avlbColor, img, seats, year, km) || this;
        _this.seats = 2;
        _this.capacity = capacity;
        return _this;
    }
    Trucks.prototype.printInfo = function () {
        document.getElementById("printhere").innerHTML += "\n            <div class=\"col m-2\">\n            <div class=\"card\" style=\"width: 20rem; height: 40rem\">\n            <img src=\"" + this.img + "\" class=\"card-img-top\" style=\"height: 200px\" alt=\"Car\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\" style=\"heigh: 3rem\">" + this.brand + " " + this.model + " (" + this.year + ") </h5>\n              <p class=\"card-text\" style=\"height: 1rem\">Some generic description I'm too lazy to write.</p>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n            <hr>\n              <li class=\"list-group-item\">Number of seats: " + this.seats + "</li>\n              <li class=\"list-group-item\">Type of Fuel: " + this.fuel + "</li>\n              <li class=\"list-group-item\">Kilometers: " + this.km + "</li>\n              <li class=\"list-group-item\">Available Colors: " + this.avlbColor + "</li>\n              <li class=\"list-group-item\">Load Bearing Capacity: " + this.capacity + "</li>\n            </ul>\n            <div class=\"card-body\">\n                <button type=\"button\" class=\"btn btn-primary\"> Show Price </button>\n            </div>\n          </div>\n          <div>";
    };
    return Trucks;
}(Vehicles));
var car1 = new Vehicles("Volvo", "XZ3", "E-Car", ["Red", "Orange", "Black"], "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg", 5, 2016, 15000);
car1.printInfo();
var bike1 = new Motorbikes("Kawasaki", "Gen4", "Diesel", ["Green"], "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg", 3, 2011, 10000);
bike1.printInfo();
var truck1 = new Trucks("Somebrand", "Ace3000", "Petrol", ["Red", "Silver"], "https://cdn.pixabay.com/photo/2017/06/27/18/18/isolated-2448337_960_720.png", 2, 2011, 80000, 30);
truck1.printInfo();
var tinyCar1 = new tinyCar("Smart", "500", "Hybrid", ["Blue", "Green", "Yellow", "Orange", "Red", "Purple", "Black", "White", "Silver"], "https://cdn.pixabay.com/photo/2020/02/16/09/16/smart-4852950_960_720.jpg", 5, 2021, 0);
tinyCar1.printInfo();
/*
let allbuttons = document.getElementsByClassName(`btn`);

for (let i = 0; i < allbuttons.length; i++){
    allbuttons[i].addEventListener("click", function(){
        alert("Test");
  });
} */ 
