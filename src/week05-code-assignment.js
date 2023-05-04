import { MenuItems } from '../classes/menuItems.js'; 
import { main } from '../modules/menuDataStructure.js';

function display(menu) { 
    return prompt(menu);
}

let mainMenu = new MenuItems('main', 'top'); 
mainMenu.addFromFile(main); 

let selectedMenu = '!';
let selectedMenuOptions = mainMenu;

while (selectedMenu !== 'X') {
    selectedMenuOptions.getMenuItems().forEach(menu => {

        if (selectedMenu.toUpperCase() === menu.identifier) { 
            selectedMenuOptions.handleCallBack(menu.callback);
        }
    })
   selectedMenu = display(selectedMenuOptions.displayMenu());   
};
alert("Program exited");



