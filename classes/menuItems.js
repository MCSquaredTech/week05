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
            let menuItem = new MenuItem(menu.name, menu.identifier, menu.callback, menu.description);
            this.add(menuItem);
        });

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
}
