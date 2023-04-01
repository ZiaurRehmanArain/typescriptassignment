abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }

    getMake(): string {
        return this.make;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    isRented(): boolean {
        return this.rented;
    }

    setRented(rented: boolean): void {
        this.rented = rented;
    }

    abstract rentalRate(): number;

    rent(): void {
        if (this.rented) {
            console.log(`${this.make} ${this.model} ${this.year} is already rented `);
        } else {
            this.rented = true;
            console.log(`${this.make} ${this.model} ${this.year} has been rented`);
        }
    }

    return(): void {
        if (this.rented) {
            this.rented = false;
            console.log(`${this.make} ${this.model} ${this.year} has been returned`);
        } else {
            console.log(`${this.make} ${this.model} ${this.year} has not been rented`);
        }
    }
}

class Car extends Vehicle {
    private numDoors: number;
    private numPassengers: number;
    private color: string;

    constructor(make: string, model: string, year: number, numDoors: number, numPassengers: number, colors: string) {
        super(make, model, year);
        this.numDoors = numDoors;
        this.numPassengers = numPassengers;
        this.color = colors;
    }

    rentalRate(): number {
        // Provide rental rate for cars
        return 100;
    }

    getNumDoors(): number {
        return this.numDoors;
    }
    getColor(): string {
        return this.color;
    }

    getNumPassengers(): number {
        return this.numPassengers;
    }
}

class Truck extends Vehicle {
    private payloadCapacity: number;

    constructor(make: string, model: string, year: number, payloadCapacity: number) {
        super(make, model, year);
        this.payloadCapacity = payloadCapacity;
    }

    rentalRate(): number {
        // Provide rental rate for trucks
        return 200;
    }

    getPayloadCapacity(): number {
        return this.payloadCapacity;
    }
}

class Motorcycle extends Vehicle {
    private engineSize: number;


    constructor(make: string, model: string, year: number, engineSize: number) {
        super(make, model, year);
        this.engineSize = engineSize;

    }

    rentalRate(): number {
        // Provide rental rate for motorcycles
        return 50;
    }

    getEngineSize(): number {
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
console.log(truck.getModel())

const MotorCycle = new Motorcycle('honda', 'CD70', 2023, 70);
console.log(MotorCycle.getMake())
console.log(MotorCycle.getModel())
console.log(MotorCycle.getEngineSize())
console.log(MotorCycle.getYear())
document.write("<br> <h1> Type script Vehicle  Assignment No : 2 </h1> <br>")

document.write("<br> <h1> Car </h1> <br>")
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
    <td>${car.rentalRate() as any}</td>
    <td>${car.getColor()}</td>
    <td>${car.getNumPassengers() as any}</td>
    <td>${ car.getNumDoors() as any}</td>
    <td>${car.getYear() as any}</td>
</tr>
</table>`)

// document.write("Company Name   :", car.getMake())
// document.write("<br>Model :", car.getModel())
// document.write("<br>Car Rent   :", car.rentalRate() as any)
// document.write("<br>Color :", car.getColor())
// document.write("<br>Passenger :", car.getNumPassengers() as any)
// document.write("<br>Door :", car.getNumDoors() as any)
// document.write("<br>Year :", car.getYear() as any)

document.write("<br> <h1> Truck </h1> <br>")


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
    <td>${truck.rentalRate() as any}</td>
    <td>${truck.getPayloadCapacity() as any}</td>
    <td>${truck.getYear() as any}</td>
</tr>
</table>
    
`)

// document.write("<br>Truck model         :", truck.getModel())
// document.write("<br>Company Name        :", truck.getMake())
// document.write("<br>Truck Rent  :", truck.rentalRate() as any)

// document.write("<br>Show pay load capacity        :", truck.getPayloadCapacity() as any)
// document.write("<br>Year        :", truck.getYear() as any)


document.write("<br> <h1> MotorCycle </h1> <br>")

document.write(
    `
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
    <td>${MotorCycle.rentalRate() as any}</td>
    <td>${MotorCycle.getEngineSize() as any}</td>
    <td>${MotorCycle.getYear() as any}</td>
</tr>
</table>
    `
)


// document.write("<br>Company name     :", MotorCycle.getMake())

// document.write("<br>Model name    :", MotorCycle.getModel())
// document.write("<br>Car Rent   :", MotorCycle.rentalRate() as any)

// document.write("<br>Engine  Size    :", MotorCycle.getEngineSize() as any)
// document.write("<br>Get year   :",  )


// sir any type casting reson is value is not show browser