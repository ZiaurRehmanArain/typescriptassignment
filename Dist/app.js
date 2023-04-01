"use strict";
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log(`${this.make} ${this.model} ${this.year} is already rented `);
        }
        else {
            this.rented = true;
            console.log(`${this.make} ${this.model} ${this.year} has been rented`);
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            console.log(`${this.make} ${this.model} ${this.year} has been returned`);
        }
        else {
            console.log(`${this.make} ${this.model} ${this.year} has not been rented`);
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numDoors, numPassengers, colors) {
        super(make, model, year);
        this.numDoors = numDoors;
        this.numPassengers = numPassengers;
        this.color = colors;
    }
    rentalRate() {
        // Provide rental rate for cars
        return 100;
    }
    getNumDoors() {
        return this.numDoors;
    }
    getColor() {
        return this.color;
    }
    getNumPassengers() {
        return this.numPassengers;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, payloadCapacity) {
        super(make, model, year);
        this.payloadCapacity = payloadCapacity;
    }
    rentalRate() {
        // Provide rental rate for trucks
        return 200;
    }
    getPayloadCapacity() {
        return this.payloadCapacity;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, engineSize) {
        super(make, model, year);
        this.engineSize = engineSize;
    }
    rentalRate() {
        // Provide rental rate for motorcycles
        return 50;
    }
    getEngineSize() {
        return this.engineSize;
    }
}
// Example usage
const car = new Car('Toyota', 'Corolla', 2023, 4, 5, "Red");
console.log(car.getMake()); // Output: Toyota
console.log(car.rentalRate()); // Output: 50
console.log(car.getColor()); // Output: red
car.rent(); // Output: Toyota Corolla 2023 has been rented
console.log(car.isRented()); // Output: true
car.rent(); // Output: Toyota Corolla 2021 is already rented
car.return(); // Output: Toyota Corolla 2021 has been returned
console.log(car.isRented()); // Output: false
const truck = new Truck('Ford', 'F-200', 2023, 1500);
console.log(truck.getModel());
const MotorCycle = new Motorcycle('honda', 'CD70', 2023, 70);
console.log(MotorCycle.getMake());
console.log(MotorCycle.getModel());
console.log(MotorCycle.getEngineSize());
console.log(MotorCycle.getYear());
document.write("<br> <h1> Type script Vehicle  Assignment No : 2 </h1> <br>");
document.write("<br> <h1> Car </h1> <br>");
document.write(` <table  border='2px'  style="border-collapse: collapse;width:80%;text-align: center;height: 100px;">
<tr >
    <th>Company Name </th>
    <th>Model </th>
    <th>Car Rent </th>
    <th>Color </th>
    <th>Passenger  </th>
    <th> Door</th>
    <th>Year </th>
</tr>
<tr>
    <td>${car.getMake()}</td>
    <td>${car.getModel()}</td>
    <td>${car.rentalRate()}</td>
    <td>${car.getColor()}</td>
    <td>${car.getNumPassengers()}</td>
    <td>${car.getNumDoors()}</td>
    <td>${car.getYear()}</td>
</tr>
</table>`);
// document.write("Company Name   :", car.getMake())
// document.write("<br>Model :", car.getModel())
// document.write("<br>Car Rent   :", car.rentalRate() as any)
// document.write("<br>Color :", car.getColor())
// document.write("<br>Passenger :", car.getNumPassengers() as any)
// document.write("<br>Door :", car.getNumDoors() as any)
// document.write("<br>Year :", car.getYear() as any)
document.write("<br> <h1> Truck </h1> <br>");
document.write(`
<table  border='2px' style="border-collapse: collapse; border: 2px solid black;width:80%;text-align: center;height: 100px;">

<tr>
<th>Truck model</th>
<th>Company Name</th>
<th>Truck Rent</th>
<th>pay load capacity</th>
<th>Year </th>
</tr>
<tr>
    <td>${truck.getModel()}</td>
    <td>${truck.getMake()}</td>
    <td>${truck.rentalRate()}</td>
    <td>${truck.getPayloadCapacity()}</td>
    <td>${truck.getYear()}</td>
</tr>
</table>
    
`);
// document.write("<br>Truck model         :", truck.getModel())
// document.write("<br>Company Name        :", truck.getMake())
// document.write("<br>Truck Rent  :", truck.rentalRate() as any)
// document.write("<br>Show pay load capacity        :", truck.getPayloadCapacity() as any)
// document.write("<br>Year        :", truck.getYear() as any)
document.write("<br> <h1> MotorCycle </h1> <br>");
document.write(`
    <table  border='2px' style="border-collapse: collapse; border: 2px solid black;width:80%;text-align: center;height: 100px;">

<tr>
<th>Company name </th>
<th>Model name</th>
<th>Car Rent</th>
<th>Engine  Size</th>
<th>Year</th>
</tr>
<tr>
    <td>${MotorCycle.getMake()}</td>
    <td>${MotorCycle.getModel()}</td>
    <td>${MotorCycle.rentalRate()}</td>
    <td>${MotorCycle.getEngineSize()}</td>
    <td>${MotorCycle.getYear()}</td>
</tr>
</table>
    `);
// document.write("<br>Company name     :", MotorCycle.getMake())
// document.write("<br>Model name    :", MotorCycle.getModel())
// document.write("<br>Car Rent   :", MotorCycle.rentalRate() as any)
// document.write("<br>Engine  Size    :", MotorCycle.getEngineSize() as any)
// document.write("<br>Get year   :",  )
// sir any type casting reson is value is not show browser
//# sourceMappingURL=app.js.map