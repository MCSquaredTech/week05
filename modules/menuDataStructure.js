export let main = [{
        name: "Create New Car",
        identifier: 'N',
        callback: "NewCar",
        description: "Create a new recipe from scratch"
    },
    {   
        name: "Select Cars",
        identifier: 'S', 
        callback: "selectCar",
        description: "Returns all recipes from Database"
    },
    {
        name: "Delete Car",
        identifier: "D", 
        callback: "deleteCar", 
        description: "Deletes selected car from list"
    },
    {
        name: "Display All Car", 
        identifier: "A",
        callback: "allCars",
        description: "Show all cars in the list"
    },
    {
        name: "Exit Program", 
        identifier: "X", 
        callback: "exitProgram", 
        description: "What can I, Stop it! Really!"
    }
];