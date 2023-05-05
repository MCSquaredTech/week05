import { MenuItems } from './menuItems.js'; 
import { Cars } from './cars.js';
import { Car } from './car.js'

export class MainMenu extends MenuItems { 
    constructor (name, level, cars)  { 
        super(name, level); 
        this.carObject = cars; 
        this.carObject.selectedCar = null;
    }

    displayMenu() {
        let menuLook = ''; 
        this.selector.forEach(mi => {
            menuLook += mi.displayMenuItem();
        })
        return prompt(menuLook);
    }

    handleCallBack(action) { 
        switch (action) {
            case 'createNew':
                this. createNewCar();
                break;
            case 'selectCar':
                this.selectCar();
                break;
            case 'deleteCar':
                this.deleteCar();
                break;
            case 'allCars':
                this.allCars();
                break;
            case 'exitProgram':
                this.exitProgram();
                break;
        }
    }

    createNewCar() {
        let year = prompt('Enter the year of the car'); 
        let make = prompt("Enter the car's make"); 
        let model = prompt("Enter the car's model"); 
        let mileage = prompt('Enter current mileage');
        let description = prompt("Enter description"); 

        let car = new Car(year, make, model, mileage, description); 
        this.carObject.add(car); 
        this.carObject.selectedCar = car;
    }
    
    selectCar() {
        console.log(this.carObject.selectedCar);
        if (this.carObject.selectedCar !== null) { 
            prompt(this.carObject.selectedCar.display());
        } else {
            this.allCars();
        }
    }

    deleteCar() { 
        let index = this.carObject.carCollection.indexOf(this.carObject.selectedCar);
        console.log(index);
        if (index > -1) { 
            this.carObject.carCollection.splice(index, 1);
            this.carObject.selectedCar = null;
        } else {
            this.allCars();
        }
    }

    allCars() { 
        
        // Moving to the car menu
    }

    exitProgram() { 
        alert(this.selectedMenuItem.description);
        this.selectedMenuItem.selectedMenuItem = '?';
    }
}