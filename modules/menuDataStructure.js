export let main = [{
        name: "Create New Car",
        identifier: 'N',
        callback: "createNew",
        description: "Create a new recipe from scratch"
    },
    {   
        name: "Get this Car",
        identifier: 'G', 
        callback: "getList",
        description: "Returns the select car from Database"
    },
    {
        name: "Delete Car",
        identifier: "D", 
        callback: "deleteCar", 
        description: "Deletes selected car from Database"
    },
    {
        name: "Display All Car", 
        identifier: "A",
        callback: "allCars",
        description: "Show all cars in the Database"
    },
    {
        name: "Exit Program", 
        identifier: "X", 
        callback: "exitProgram", 
        description: "What can I, Stop it! Really!"
    }
];