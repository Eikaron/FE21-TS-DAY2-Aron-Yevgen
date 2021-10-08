/* Day 2 | Classwork | Advanced

Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

- Create a Parent Class called Vehicles
- Define properties and methods for the super Class
- Consider the inheritance concept
- Define 2 other Child classes and name them Motorbikes and Trucks
- Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula) 
*/

class Vehicles {
    modelName: string;
    fuelType: string;
    numSeats: number;
    km: number;
    year: number;
    image: string;

    constructor(modelName:string, fuelType:string, numSeats:number, km:number, year:number, image:string){
        this.modelName = modelName;
        this.fuelType = fuelType;
        this.numSeats = numSeats;
        this.km = km;
        this.year = year;
        this.image = image;
        vehicles.push(this);
    }

    buildCardTop(){
        return `
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card" style="width: 20rem;">
            <img src="${this.image}" class="card-img-top" alt="${this.modelName}">
                <div class="card-body">
                    <h5 class="card-title"><b>${this.modelName}</b></h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between">
                        Type of fuel: <b>${this.fuelType}</b>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        Seats: <b>${this.numSeats}</b>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        Km: <b>${this.km}</b>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        Produced: <b>${this.year}</b>
                    </li>`;
    }
    
    buildCardBottom(){
        return `
                    <li class="list-group-item d-flex justify-content-between price d-none">
                        Price: <b>${this.calculatePrice()}€</b>
                    </li>
                </ul>
                <div class="card-body mx-auto">
                <button class="btn btn-primary " type="button">Show me the price</button>
                </div>
            </div>
        </div>
        `;
    }

    printVehicle(){
        return this.buildCardTop() + this.buildCardBottom();
    }

    calculatePrice(){
        let price: number = (this.km + this.year) / this.numSeats;
        return Math.floor(price);
    }
}

class Motorbikes extends Vehicles {
    motorType: string;
    type: string;

    constructor(modelName, fuelType, numSeats, km, year, image, motorType:string, type:string){
        super(modelName, fuelType, numSeats, km, year, image);
        this.motorType = motorType;
        this.type = type;
    }

    buildCardTop(){
        return `${super.buildCardTop()}
        <li class="list-group-item d-flex justify-content-between">
            Motor Type: <b>${this.motorType}</b>
            </li>
        <li class="list-group-item d-flex justify-content-between">
            Type: <b>${this.type}</b>
            </li>
        `;
    }
}

class Trucks extends Vehicles {
    maxWeight: number;
    type: string;

    constructor(modelName:string, fuelType:string, numSeats:number, km:number, year:number, image:string, maxWeight:number, type:string){
        super(modelName, fuelType, numSeats, km, year, image);
        this.maxWeight = maxWeight;
        this.type = type;
    }

    buildCardTop(){
        return `${super.buildCardTop()}
        <li class="list-group-item d-flex justify-content-between">
            Max Weight: <b>${this.maxWeight}</b>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            Type: <b>${this.type}</b>
        </li>
        `;
    }
}

// Variable[array] created to store all kind of vehicles [vehicle, motorbike, trucks]
let vehicles : Array<Vehicles> = [];

// Assign new Vehicle/Motorbike/Truck 
new Vehicles("modelName", "Diesel", 4, 10000, 2021, "https://cdn.pixabay.com/photo/2016/03/09/09/23/car-1245780_960_720.jpg");

new Motorbikes("Sportster S", "Benzin", 1, 500, 2021, "https://www.thunderbike.de/wp-content/uploads/2021/07/full-bike-shot-media-card-800x450.jpg", "Revolution Max 1250T", "Naked Bike");

new Trucks("Mecedes-Benz Actros 2545", "Diesel", 6, 20500, 2019, "https://cdn.pixabay.com/photo/2015/11/07/11/08/truck-1030846_960_720.jpg", 40000, "Big One");


// Print every vehicle from array vehicles
for (let vehicle of vehicles){
    (document.getElementById("output")as HTMLElement).innerHTML += vehicle.printVehicle();
}

// Set EventListener on buttons <show me the price> and show/hide on click the price of vehicle
let buttons = document.getElementsByClassName("btn");
let priceBlocks = document.getElementsByClassName("price");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        priceBlocks[i].classList.toggle("d-none");
    })
}

