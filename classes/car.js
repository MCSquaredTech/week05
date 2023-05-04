
export class Car { 
    constructor(year, make, model, mileage, description) {
        this.year = year; 
        this.make = make; 
        this.model = model; 
        this.mileage = mileage; 
        this.description;

        this.currentCar = null; 
    }

    display() { 
        return `Year: ${this.year} Make: ${this.make} Model: ${this.Model} \n
            mileage: ${this.milage} \n
            descripton: ${this.description} `;
    }
}