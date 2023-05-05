// menuitem.js class object MenuItem
// Menu Item Class - Object to hold a single Menu Item - I know it's a word salad. 
// MenuItem Properties:
//      name is the Name of the Menu Item 
//      identifier is the Menu response key 
//      callback is the trigger for the response key 
//      action is a menu navigation 
//      description of the menu item 
// MenuItem Methods: 
//      displayMenuItem return the identifier and menu name 

export class MenuItem { 
    constructor(name, identifier, callback, action, description) { 
        this.name = name; 
        this.identifier = identifier; 
        this.callback = callback;
        this.action = action;
        this.description = description; 
    }

    // display format of the menu item
    displayMenuItem() { 
        // console.log(`${this.identifier}) ${this.name} \n`);
        return `${this.identifier} - ${this.name} \n`;
    }
}
