import { MenuItem } from "./menuItem.js"; 
import { Action } from "./action.js";

export class MenuItems extends Action { 

    constructor(name, level) {
        super();
        this.name = name;
        this.selector = [];
        this.menuLevel = level;
        this.selectedMenuItem = null; 
    } 

    add(menuItem) { 
        this.selector.push(menuItem) 
    }

    addFromFile(fileArray) { 
        fileArray.forEach(menu => {
            let menuItem = new MenuItem(menu.name, menu.identifier, menu.callback, menu.description);
            this.add(menuItem);
        });

    }

    getCallbackFunction() { 
        return this.callback;
    }

    getMenuItems() { 
        return this.selector;
    }

    displayMenu() {
        let menuLook = ''; 
        this.selector.forEach(mi => {
            menuLook += mi.displayMenuItem();
        })
        return menuLook;
    }

    handleCallBack(action) { 

        switch (action) {
            case 'createNew':
                this.createNewCar();
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
        console.log('Create a New Car');
    }
    
    selectCar() {
        console.log('Get this Cars');
        return 'S';
    }

    deleteCar() { 
        console.log('Delete this Car'); 
    }

    allCars() { 
        console.log("Get all Cars in list"); 
    }

    exitProgram() { 
        alert("Good Bye");
    }

}
