import { MenuItems } from './menuItems.js'; 

export class CarsMenu extends MenuItems { 
    constructor (name, level)  { 
        super(name, level); 
    }

    handleCallBack(action) { 
        console.log('action code goes here!');
    }
}