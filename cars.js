class Vehicle
{
    // cnstructor
    constructor(make, model, year){
        // initialise varriables
        this.make = make;
        this.model = model;
        this.year = year;

    }

    // log information
    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

// instance of class Vehicle
// let myVehicle = new Vehicle('VW', 'Golf', 2012);
// myVehicle.Information();


class Cars extends Vehicle
{
    // Constructor
    constructor(make, model, year, doors){
        // invoke varriables from parent class
        super(make, model, year);
        // initialize new varriables
        this.doors = doors;
    }

    /* Method to invoke Information Method from  
    * parent class
    * log new information
    */
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

// instance of class Cars
let myCar = new Cars('VW', 'Polo', 2021, 5);
myCar.Information();