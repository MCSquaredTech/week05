import { MenuItem } from "./menuItem.js"; 

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

    // getCallbackFunction() { 
    //     return this.callback;
    // }

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
