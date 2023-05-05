
export class Car { 
    constructor(year, make, model, mileage, description) {
        this.year = year; 
        this.make = make; 
        this.model = model; 
        this.mileage = mileage; 
        this.description = description;

        this.currentCar = null; 
    }

    display() { 
        return `Year: ${this.year} Make: ${this.make} Model: ${this.model} \n
            mileage: ${this.mileage} \n
            descripton: ${this.description} `;
    }

    displayBreif() { 
        return `Year: ${this.year} Make: ${this.make} Model: ${this.Model}`;
    }

}