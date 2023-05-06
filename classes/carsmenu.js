import { MenuItems } from './menuItems.js'; 

// carsmenu.js class CarsMenu 
// The Cars Menu inheriates for MenuItems - Abstract class
// This encapsulates the cars menu with it's collection, properties, 
//      and methods into a nice little package.
// CarsMenu Properties: 
// From the super class requires name and level to be passed in. 
// See MenuItem class for properties and methods.
// carObjct: cars is the cars object or working object that will contain our data
// CarsMenu Methods: 
// displayMenu is a virtual class from MenuItems that must be implemented.
//      This provides the look and feel of the menu. for Cars 
// handleCallBack(action) is a virtual class from MenuItem that must be implemented.
//      The handleCallBack recieves key press message from the entry point, and 
//      applies the necessary responses. 
// supporting methods are called from the handler class.

export class CarsMenu extends MenuItems { 
    constructor (name, level, cars)  { 
        super(name, level); 
        this.carObject = cars;
    }

    displayMenu() {
        let menuLook = '\n'; 
        let selected = ''
        let allCars = this.carObject.displayCars();
        this.selector.forEach(mi => {
            menuLook += `${mi.displayMenuItem()}`;
        })
        if (this.carObject.selectedCar) {
            selected = this.carObject.selectedCar.display()
        }
        return prompt(`Current Car: ${selected}
        -------------------------
        ${menuLook}
        -------------------------- 
        All Cars: \n${allCars}
        `  );
    }

    handleCallBack(action) { 
        switch (action) {
            case 'selectCar':
                this. selectCar();
                break;
            case 'editCar':
                this.editCar();
                break;
            case 'goBack':
                
                break;
            default:
                console.log(action);
        }
    }

    // Supporting methods 
    // ------------------------------------------------------
    // selectCar provides a menu to select a specific car. 
    selectCar() { 
        let menuLook = '\n'; 
        let selected = ''
        let allCars = this.carObject.displayCars();
        this.selector.forEach(mi => {
            menuLook += `${mi.displayMenuItem()}`;
        })
   
        if (this.carObject.selectedCar) {
            selected = this.carObject.selectedCar.display()
        }
        let index = prompt(`
        Enter number to select car:
        -------------------------- 
        All Cars: \n${allCars}
        `  ); 
        this.carObject.selectedCar = this.carObject.carCollection[index];
        console.log(this.carObject.carCollection[index]);
    }

    // editCar provides methods to correct errors on the car object.
    editCar() { 
        let index = this.carObject.carCollection.indexOf(this.carObject.selectedCar);

        if (index > -1) {
            this.carObject.selectedCar.year = prompt('Edit Year?', this.carObject.selectedCar.year);
            this.carObject.selectedCar.make = prompt('Edit Make?', this.carObject.selectedCar.make);
            this.carObject.selectedCar.model = prompt('Edit Model?', this.carObject.selectedCar.model);
            this.carObject.selectedCar.mileage = prompt('Edit Mileage?', this.carObject.selectedCar.mileage);
            this.carObject.selectedCar.description = prompt('Edit Description?', this.carObject.selectedCar.description);
        }
    }
}