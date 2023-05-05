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
        let cars = '';
        for (let i = 0; i < this.carCollection.length; i++) {
            let car = this.carCollection[i]; 
            
            cars += `\n ${i} - ${car.displayBreif()} `;
        }
        return cars;
    }

    remove() { 
        let index = this.selectedCar.indexOf(selectedCar);
        this.selectedCar.slice(index, 1); 
    }
}