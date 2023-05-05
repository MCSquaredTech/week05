import { MenuItems } from './menuItems.js'; 
import { Cars } from './cars.js'; 

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

    editCar() { 
        this.carObject.selectedCar.year = prompt('Edit Year?', this.carObject.selectedCar.year);
        this.carObject.selectedCar.make = prompt('Edit Make?', this.carObject.selectedCar.make);
        this.carObject.selectedCar.model = prompt('Edit Model?', this.carObject.selectedCar.model);
        this.carObject.selectedCar.mileage = prompt('Edit Mileage?', this.carObject.selectedCar.mileage);
        this.carObject.selectedCar.description = prompt('Edit Description?', this.carObject.selectedCar.description);

    }
}