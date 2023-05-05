import { MainMenu } from '../classes/mainmenu.js';
import { CarsMenu } from '../classes/carsmenu.js';
import { main, cars } from '../modules/menuDataStructure.js';
import { Cars } from '../classes/cars.js';
import { cardata } from '../modules/carDataStructure.js';

// Most of this code should be in a Menu Class with an entry point. 
// Since we are working with Cars we instantiate a new Cars object 
// and seed the collection array with a few cars.
let newCars = new Cars();
newCars.addFromFile(cardata)

// Instaniation of the mainMenu and assign the newCars object.
let mainMenu = new MainMenu('main', 'top', newCars); 
mainMenu.addFromFile(main); 

// Instaniation of the carsMenu and assign the newCars Object.
// Not we are only dealing with one newCars object between the two menus
let carsMenu = new CarsMenu('cars', 'submenu', newCars); 
carsMenu.addFromFile(cars);

// set the while loop condition selctedMenu and assign the mainMenu 
// as the menu in focus. 
let selectedMenu = '!';
let selectedMenuOptions = mainMenu;

// menuSwitch allows the program to switch between menus.
function menuSwitch(action) { 
    if (action === 'mainMenu') {
        selectedMenuOptions = mainMenu; 
    } else if (action === 'carsMenu') {
        selectedMenuOptions = carsMenu;
    }
}

//  main entry point to the Cars Menu Driven Program.
while (selectedMenu !== '?') {
    // Display the current menu
    selectedMenu = selectedMenuOptions.displayMenu();

    selectedMenuOptions.getMenuItems().forEach(menu => {
        if (selectedMenu.toUpperCase() === menu.identifier) { 
            // get the menu object selected
            selectedMenuOptions.selectedMenuItem = menu;
            // pass the callback information to the menuitems class
            selectedMenuOptions.handleCallBack(menu.callback);
            // switch menu focus if needed
            menuSwitch(menu.action); 
            // watch for program exit.
            selectedMenu = menu.identifier === 'X' ? '?' : menu.identifier;
        }
    })
      
};




