import { Car } from './car.js'; 

// cars.js - class Cars: 
// The cars object is a collection of cars and although it does not 
// inherit from the car class it has a dependency on the base class.
// Cars Properties: 
//      carCollection is the collection of cars 
//      selectedCar is the current working car object
// Cars Methods:
//      add(newCar) push the new car to the carCollection stack 
//      addFromFile iterates through a collection of cars to see the database 
//      displayCars formats the collection of cars for presentation in the console log 
//              or in the prompt and provides the user with useful information. 
//      removeCar pops the current car from the stack - the Array prototype slice method 
//              is used to accomplish this process. 

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