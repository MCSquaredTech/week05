import { MenuItems } from './menuItems.js'; 

export class MainMenu extends MenuItems { 
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
        console.log('newCar')
        console.log(this.selectedMenuItem.description);
    }
    
    selectCar() {
        console.log(this.selectedMenuItem.description);
    }

    deleteCar() { 
        console.log(this.selectedMenuItem.description); 
    }

    allCars() { 
        console.log(this.selectedMenuItem.description); 
    }

    exitProgram() { 
        alert(this.selectedMenuItem.description);
        this.selectedMenuItem.selectedMenuItem = '?';
    }
}