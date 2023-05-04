import { MenuItems } from '../classes/menuItems.js'; 
import { main } from '../modules/menuDataStructure.js';





let handleCallBack = (action)  => { 

    switch (action) {
        case 'createNew()':
            createNewCar();
            break;
        case 'selectCar':
            selectCar();
            break;
        case 'deleteCar':
            deleteCar();
            break;
        case 'allCars':
            allCars();
            break;
        case 'exitProgram':
            exitProgram();
            break;
    }
}

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
            handleCallBack(menu.callback);
        }
    })
   selectedMenu = display(selectedMenuOptions.displayMenu());   
};


