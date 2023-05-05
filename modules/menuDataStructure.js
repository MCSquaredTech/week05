export let main = [{
        name: "Create New Car",
        identifier: 'N',
        callback: "createNew",
        action: 'mainMenu',
        description: "Add a new car to the Database"
    },
    {   
        name: "Select a Car",
        identifier: 'S', 
        callback: "selectCar",
        action: "mainMenu",
        description: "Returns the select car from Database"
    },
    {
        name: "Delete Car",
        identifier: "D", 
        callback: "deleteCar",
        action: 'mainMenu',
        description: "Deletes selected car from Database"
    },
    {
        name: "Display All Car", 
        identifier: "A",
        callback: "allCars",
        action: 'carsMenu',
        description: "Show all cars in the Database"
    },
    {
        name: "Exit Program", 
        identifier: "X", 
        callback: "exitProgram", 
        action: 'none',
        description: "Wait, What? can I do what?, No, Stop it! Really!"
    }
];

export let cars = [
    {
        name: "Select Car", 
        identifier: "S", 
        callback: 'selectCar',
        action: "mainMenu", 
        description: "Select the car from the Database"
    },
    { 
        name: "Edit Car", 
        identifier: "E",
        callback: "editCar",
        action: "mainMenu",
        description: "Edit car information"
    },
    {
        name: "Back to Main Menu", 
        identifier: "B", 
        callback: "goBack", 
        action: "mainMenu",
        description: "Return to the previous menu"
    }
]