
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