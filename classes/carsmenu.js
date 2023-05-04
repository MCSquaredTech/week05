import { MenuItems } from './menuItems.js'; 

export class CarsMenu extends MenuItems { 
    constructor (name, level)  { 
        super(name, level); 
    }

    displayMenu() {
        let menuLook = ''; 
        this.selector.forEach(mi => {
            menuLook += mi.displayMenuItem();
        })
        return prompt(menuLook);
    }

    handleCallBack(action) { 
        console.log('action code goes here!');
    }
}