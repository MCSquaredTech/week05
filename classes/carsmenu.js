import { MenuItems } from './menuItems.js'; 
import { Cars } from './cars.js'; 

export class CarsMenu extends MenuItems { 
    constructor (name, level, cars)  { 
        super(name, level); 
        this.carObject = cars;
    }

    displayMenu() {
        let menuLook = ''; 
        let selected = ''
        this.selector.forEach(mi => {
            menuLook += mi.displayMenuItem();
        })
        console.log(this.carObject.carCollection.length);
        if (this.carObject.selectedCar) {
            selected = this.carObject.selectedCar.display()
        }
        return prompt(`${menuLook}
        -------------------------- 
        ${selected}
        --------------------------
        
        `  );
    }

    handleCallBack(action) { 
        console.log('action code goes here!');
    }
}