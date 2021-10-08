/* Day 2 | Classwork | Advanced

Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

- Create a Parent Class called Vehicles
- Define properties and methods for the super Class
- Consider the inheritance concept
- Define 2 other Child classes and name them Motorbikes and Trucks
- Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(modelName, fuelType, numSeats, km, year, image) {
        this.modelName = modelName;
        this.fuelType = fuelType;
        this.numSeats = numSeats;
        this.km = km;
        this.year = year;
        this.image = image;
        vehicles.push(this);
    }
    Vehicles.prototype.buildCardTop = function () {
        return "\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\n            <div class=\"card\" style=\"width: 20rem;\">\n            <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.modelName + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"><b>" + this.modelName + "</b></h5>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item d-flex justify-content-between\">\n                        Type of fuel: <b>" + this.fuelType + "</b>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between\">\n                        Seats: <b>" + this.numSeats + "</b>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between\">\n                        Km: <b>" + this.km + "</b>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between\">\n                        Produced: <b>" + this.year + "</b>\n                    </li>";
    };
    Vehicles.prototype.buildCardBottom = function () {
        return "\n                    <li class=\"list-group-item d-flex justify-content-between price d-none\">\n                        Price: <b>" + this.calculatePrice() + "\u20AC</b>\n                    </li>\n                </ul>\n                <div class=\"card-body mx-auto\">\n                <button class=\"btn btn-primary \" type=\"button\">Show me the price</button>\n                </div>\n            </div>\n        </div>\n        ";
    };
    Vehicles.prototype.printVehicle = function () {
        return this.buildCardTop() + this.buildCardBottom();
    };
    Vehicles.prototype.calculatePrice = function () {
        var price = (this.km + this.year) / this.numSeats;
        return Math.floor(price);
    };
    return Vehicles;
}());
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(modelName, fuelType, numSeats, km, year, image, motorType, type) {
        var _this = _super.call(this, modelName, fuelType, numSeats, km, year, image) || this;
        _this.motorType = motorType;
        _this.type = type;
        return _this;
    }
    Motorbikes.prototype.buildCardTop = function () {
        return _super.prototype.buildCardTop.call(this) + "\n        <li class=\"list-group-item d-flex justify-content-between\">\n            Motor Type: <b>" + this.motorType + "</b>\n            </li>\n        <li class=\"list-group-item d-flex justify-content-between\">\n            Type: <b>" + this.type + "</b>\n            </li>\n        ";
    };
    return Motorbikes;
}(Vehicles));
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(modelName, fuelType, numSeats, km, year, image, maxWeight, type) {
        var _this = _super.call(this, modelName, fuelType, numSeats, km, year, image) || this;
        _this.maxWeight = maxWeight;
        _this.type = type;
        return _this;
    }
    Trucks.prototype.buildCardTop = function () {
        return _super.prototype.buildCardTop.call(this) + "\n        <li class=\"list-group-item d-flex justify-content-between\">\n            Max Weight: <b>" + this.maxWeight + "</b>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between\">\n            Type: <b>" + this.type + "</b>\n        </li>\n        ";
    };
    return Trucks;
}(Vehicles));
// Variable[array] created to store all kind of vehicles [vehicle, motorbike, trucks]
var vehicles = [];
// Assign new Vehicle/Motorbike/Truck 
new Vehicles("modelName", "Diesel", 4, 10000, 2021, "https://cdn.pixabay.com/photo/2016/03/09/09/23/car-1245780_960_720.jpg");
new Motorbikes("Sportster S", "Benzin", 1, 500, 2021, "https://www.thunderbike.de/wp-content/uploads/2021/07/full-bike-shot-media-card-800x450.jpg", "Revolution Max 1250T", "Naked Bike");
new Trucks("Mecedes-Benz Actros 2545", "Diesel", 6, 20500, 2019, "https://cdn.pixabay.com/photo/2015/11/07/11/08/truck-1030846_960_720.jpg", 40000, "Big One");
// Print every vehicle from array vehicles
for (var _i = 0, vehicles_1 = vehicles; _i < vehicles_1.length; _i++) {
    var vehicle = vehicles_1[_i];
    document.getElementById("output").innerHTML += vehicle.printVehicle();
}
// Set EventListener on buttons <show me the price> and show/hide on click the price of vehicle
var buttons = document.getElementsByClassName("btn");
var priceBlocks = document.getElementsByClassName("price");
var _loop_1 = function (i) {
    buttons[i].addEventListener("click", function () {
        priceBlocks[i].classList.toggle("d-none");
    });
};
for (var i = 0; i < buttons.length; i++) {
    _loop_1(i);
}
