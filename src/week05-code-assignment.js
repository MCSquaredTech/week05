import { MainMenu } from '../classes/mainmenu.js';
import { CarsMenu } from '../classes/carsmenu.js';
import { main, cars } from '../modules/menuDataStructure.js';



let mainMenu = new MainMenu('main', 'top'); 
mainMenu.addFromFile(main); 

let carsMenu = new CarsMenu('cars', 'submenu'); 
carsMenu.addFromFile(cars);


let selectedMenu = '!';
let selectedMenuOptions = mainMenu;

function menuSwitch(action) { 
    if (action === 'mainMenu') {
        selectedMenuOptions = mainMenu; 
    } else if (action === 'carsMenu') {
        selectedMenuOptions = carsMenu;
    }
}



while (selectedMenu !== '?') {

    selectedMenu = selectedMenuOptions.displayMenu();

    selectedMenuOptions.getMenuItems().forEach(menu => {
        if (selectedMenu.toUpperCase() === menu.identifier) { 
            selectedMenuOptions.selectedMenuItem = menu;
            selectedMenuOptions.handleCallBack(menu.callback);
            menuSwitch(menu.action); 
            selectedMenu = menu.identifier === 'X' ? '?' : menu.identifier;
        }
    })
      
};




