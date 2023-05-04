import { MenuItems } from '../classes/menuItems.js'; 
import { main } from '../modules/menuDataStructure.js';

let mainMenu = new MenuItems('main', 'top'); 
mainMenu.addFromFile(main); 

let selectedMenu = 'S';
let selectedMenuOptions = mainMenu;


while (selectedMenu !== 'X') {
    selectedMenuOptions.getMenuItems().forEach(menu => {
        if (selectedMenu.toUpperCase() === menu.identifier) { 
            console.log(menu.callback);
            menu.callback;
        }
    })
   selectedMenu = display(selectedMenuOptions.displayMenu());   
};

function createNew() {
    console.log('Create a new dish')
}

function getList() {
    console.log('Get the list of dishes');
    return 'S';
}

function display(menu) { 
    return prompt(menu);
}

