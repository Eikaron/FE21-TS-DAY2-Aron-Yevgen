class Vehicles {
    brand: string;
    model: string;
    fuel: string;
    avlbColor: string[];
    img: string;

    seats: number;
    year: number;
    km: number;
    //rdm: number = Math.random();
    //rdm: number = toString(Math.random());

    constructor(brand: string, model: string, fuel: string, avlbColor: string[], img:string, seats: number, year: number, km: number){
        this.brand = brand;
        this.model = model;
        this.fuel = fuel;
        this.avlbColor = avlbColor;
        this.img = img;
        
        this.seats = seats;
        this.year = year;
        this.km = km;
    }


    printInfo(){
        document.getElementById("printhere").innerHTML += `
        <div class="col m-2">
        <div class="card" style="width: 20rem; height: 40rem">
        <img src="${this.img}" class="card-img-top" style="height: 200px" alt="Car">
        <div class="card-body">
          <h5 class="card-title" style="heigh: 3rem">${this.brand} ${this.model} (${this.year}) </h5>
          <p class="card-text" style="height: 1rem">Some generic description I'm too lazy to write.</p>
        </div>
        <ul class="list-group list-group-flush">
        <hr>
          <li class="list-group-item">Number of seats: ${this.seats}</li>
          <li class="list-group-item">Type of Fuel: ${this.fuel}</li>
          <li class="list-group-item">Kilometers: ${this.km}</li>
          <li class="list-group-item">Available Colors: ${this.avlbColor}</li>
        </ul>
        <div class="card-body">
            <button type="button" id="${this.rdm}" class="btn btn-primary"> Show Price </button>
        </div>
      </div>
      <div>`;


    /*     let allbuttons = document.getElementsByClassName(`btn`);

        for (let i = 0; i < allbuttons.length; i++){
            allbuttons[i].addEventListener("click", function(){
                alert("Test");
          });
        } */

        document.getElementById(this.rdm).addEventListener("click", function(){
            console.log("test");
        })
    }
}

class tinyCar extends Vehicles {

    constructor(brand: string, model: string, fuel: string, avlbColor: string[], img:string, seats: number, year: number, km: number){
        super(brand, model, fuel, avlbColor, img, seats, year, km);
        this.seats = 2;
    }
}


class Motorbikes extends Vehicles {

    constructor(brand: string, model: string, fuel: string, avlbColor: string[], img:string, seats: number, year: number, km: number){
        
        super(brand, model, fuel, avlbColor, img, seats, year, km);
        this.avlbColor = ["Standard"];
        
        if (seats > 2){
            this.seats = 1; //Motorbikes don't have more than two seats
        }
    }
}

class Trucks extends Vehicles {

    capacity: number;

    constructor(brand: string, model: string, fuel: string, avlbColor: string[], img:string, seats: number, year: number, km: number, capacity: number){
        super(brand, model, fuel, avlbColor, img, seats, year, km);
        this.seats = 2;
        this.capacity = capacity;
    }

    printInfo(){
            document.getElementById("printhere").innerHTML += `
            <div class="col m-2">
            <div class="card" style="width: 20rem; height: 40rem">
            <img src="${this.img}" class="card-img-top" style="height: 200px" alt="Car">
            <div class="card-body">
              <h5 class="card-title" style="heigh: 3rem">${this.brand} ${this.model} (${this.year}) </h5>
              <p class="card-text" style="height: 1rem">Some generic description I'm too lazy to write.</p>
            </div>
            <ul class="list-group list-group-flush">
            <hr>
              <li class="list-group-item">Number of seats: ${this.seats}</li>
              <li class="list-group-item">Type of Fuel: ${this.fuel}</li>
              <li class="list-group-item">Kilometers: ${this.km}</li>
              <li class="list-group-item">Available Colors: ${this.avlbColor}</li>
              <li class="list-group-item">Load Bearing Capacity: ${this.capacity}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-primary"> Show Price </button>
            </div>
          </div>
          <div>`;
        }
}


let car1 = new Vehicles("Volvo", "XZ3", "E-Car", ["Red", "Orange", "Black"],"https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg", 5, 2016, 15000)

car1.printInfo();

let bike1 = new Motorbikes("Kawasaki", "Gen4", "Diesel", ["Green"], "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg", 3, 2011, 10000);

bike1.printInfo();

let truck1 = new Trucks ("Somebrand", "Ace3000", "Petrol", ["Red", "Silver"],"https://cdn.pixabay.com/photo/2017/06/27/18/18/isolated-2448337_960_720.png", 2, 2011, 80000,30);

truck1.printInfo();

let tinyCar1 = new tinyCar("Smart", "500", "Hybrid", ["Blue", "Green", "Yellow", "Orange", "Red", "Purple", "Black", "White", "Silver"], "https://cdn.pixabay.com/photo/2020/02/16/09/16/smart-4852950_960_720.jpg", 5, 2021, 0);

tinyCar1.printInfo();


/* 
let allbuttons = document.getElementsByClassName(`btn`);

for (let i = 0; i < allbuttons.length; i++){
    allbuttons[i].addEventListener("click", function(){
        alert("Test");
  });
} */