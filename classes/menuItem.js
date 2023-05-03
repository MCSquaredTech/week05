
export class MenuItem { 
    constructor(name, identifier, callback, description) { 
        this.name = name; 
        this.identifier = identifier; 
        this.callback = callback;
        this.description = description; 
    }

    displayMenuItem() { 
        // console.log(`${this.identifier}) ${this.name} \n`);
        return `${this.identifier} - ${this.name} \n`;
    }

    getDescription() {
        return this.description;
    }

    getCallback() { 
        return this.callback;
    }

}
