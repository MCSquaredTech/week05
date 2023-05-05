import { MenuItem } from "./menuItem.js"; 

// menuitems.js Class Object MenuItems 
// MenuItems is a collection of MenuItem and is an abstract class that 
//      provides propties and methods for the inheritance class. 
// MenuItems Properties: 
//      name: the name of the Menu 
//      selector: is the collection of menu item
//      menuLevel: identifies if the menu is the main level or a sub menu 
//      selectedMenuItem: is the current Item selected 
// MenuItems Methods: 
//      add(menuItem) add the menu item to the selector collection
//      addFromFile(fileArray) dynamically populates the Menu 
//      getMenuItems(): returns the current selected menu item
//      displayMenu(): is a virtual function that must be created in the 
//          child class. 
//      handleCallBack(action): is a virtual method that must be created in
//          the child class - this handle key pressed events and manages calls 
//          to the menu methods in the child class. 

export class MenuItems { 

    constructor(name, level) {
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
            let menuItem = new MenuItem(menu.name, menu.identifier, menu.callback, menu.action, menu.description);
            this.add(menuItem);
        });

    }

    getMenuItems() { 
        return this.selector;
    }

    displayMenu() {
       // Virtual function to be implement in Child 
       throw new Error('Must Implement at calling class');
    }

    handleCallBack(action) { 
        // Virtual function to be implement in Child 
        throw new Error('Must Implement at calling class');
    }

    

}
