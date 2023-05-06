import { MenuItems } from './menuItems.js'; 
import { Car } from './car.js'

// mainmenu.js class MainMenu 
// The Main Menu inheriates for MenuItems - Abstract class
// This encapsulates the cars menu with it's collection, properties, 
//      and methods into a nice little package.
// MainMenu Properties: 
// From the super class requires name and level to be passed in. 
// See MenuItem class for properties and methods.
// carObjct: cars is the cars object or working object that will contain our data
// MainMenu Methods: 
// displayMenu is a virtual class from MenuItems that must be implemented.
//      This provides the look and feel of the menu. for Cars 
// handleCallBack(action) is a virtual class from MenuItem that must be implemented.
//      The handleCallBack recieves key press message from the entry point, and 
//      applies the necessary responses. 
// supporting methods are called from the handler class.

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
                this.selectedCar();
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

    // Supporting Methods for handleCallBack Method 
    // -----------------------------------------------
    // createNewCar - Just like it sounds gather information to create a car object.
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
    
    //  selectedCar - displays the current selected car. if no car is select it returns 
    //      to the mainmenu 
    selectedCar() {
        if (this.carObject.selectedCar !== null) { 
            prompt(this.carObject.selectedCar.display());
        } 
    }
    
    // deleteCar - deletes the current selected car. if no car is select it returns to 
    //      the mainmenu.
    deleteCar() { 
        let index = this.carObject.carCollection.indexOf(this.carObject.selectedCar);

        if (index > -1) { 
            this.carObject.carCollection.splice(index, 1);
            this.carObject.selectedCar = null;
        } 
    }

    // allCars envokes a switch to the cars menu to display all the cars.
    allCars() { 
        
        // Moving to the car menu
    }

    // Exit Program - Yeah, it exit the program. 
    exitProgram() { 
        alert(this.selectedMenuItem.description);
        this.selectedMenuItem.selectedMenuItem = '?';
    }
}