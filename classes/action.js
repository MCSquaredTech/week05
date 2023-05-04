export class Action {
    constructor() {

    }

    // Abstract Class with on virtual function 
    handleCallBack(action) {
        // Must be handle at the in the MenuItems Class 
        throw new Error("Virtual Function! - Must be implemented in MenuItems"); 
    }
}