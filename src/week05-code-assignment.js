import { MenuItems } from '../classes/menuItems.js'; 
import { main } from '../modules/menuDataStructure.js';

let mainMenu = new MenuItems('main', 'top'); 
mainMenu.addFromFile(main); 

let selectedMenu = 'S';
let selectedMenuOptions = mainMenu;


while (selectedMenu !== 'X') {
    selectedMenuOptions.getMenuItems().forEach(menu => {

        if (selectedMenu === menu.identifier) { 
            menu.callback;
        }
    })
   selectedMenu = display(selectedMenuOptions.displayMenu());   
};


function display(menu) { 
    return prompt(menu);
}

