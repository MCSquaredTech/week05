import { MainMenu } from '../classes/mainmenu.js';
import { CarsMenu } from '../classes/carsmenu.js';
import { main, cars } from '../modules/menuDataStructure.js';
import { Cars } from '../classes/cars.js';
import { cardata } from '../modules/carDataStructure.js';


let newCars = new Cars();
newCars.addFromFile(cardata)

let mainMenu = new MainMenu('main', 'top', newCars); 
mainMenu.addFromFile(main); 

let carsMenu = new CarsMenu('cars', 'submenu', newCars); 
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

console.log(newCars.displayCars);



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




