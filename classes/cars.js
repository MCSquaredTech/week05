import { Car } from './car.js'; 


// Cars is a collection of car
export class Cars { 
    constructor() {
        this.carCollection = []; 
        this.selectedCar = null; 
    }

    add(newCar) { 
        this.carCollection.push(newCar); 
        return newCar;
    }

    addFromFile(carArray) {
        carArray.forEach(car => {
            let newCar = new Car(car.year, car.make, car.model, car.mileage, car.description);
            this.add(newCar);
        })
    }

    displayCars() { 
        let index = 0; 
        let cars = '';
        carObject.carCollection.forEach(car => { 
            cars += `${index} - ${this.car.displayBreif()} /n`;
            i++;
        })
        return cars;
    }

    remove() { 
        let index = this.selectedCar.indexOf(selectedCar);
        this.selectedCar.slice(index, 1); 
    }
}