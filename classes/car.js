// car.js - class Car:
// the car object provides properties and method to support the car object
// Properties are: 
//      Year, Make, Model, Mileage, and Description of Car 
// Methods are: 
//      display the provides a complete inventory of all the cars properties
//      displayBreif provides the basic year, make, and model.

export class Car { 
    constructor(year, make, model, mileage, description) {
        this.year = year; 
        this.make = make; 
        this.model = model; 
        this.mileage = mileage; 
        this.description = description;
    }

    display() { 
        return `
            Year: ${this.year} Make: ${this.make} Model: ${this.model} 
            Mileage: ${this.mileage} 
            Descripton: ${this.description} `;
    }

    displayBreif() { 
        return `Year: ${this.year} Make: ${this.make} Model: ${this.model}`;
    }

}