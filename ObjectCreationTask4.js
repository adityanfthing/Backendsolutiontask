const Car = {
    brand: "Toyota", 
    model: "Corolla", 
    year: 2022, 
    mileage: 15000, 
    releaseYear: 2021, 
    isNew: false, 

    
    updateMileage(newMileage) {
        if (typeof newMileage === 'number') {
            this.mileage = newMileage;
            console.log(`Mileage updated to ${this.mileage} miles.`);
        } else {
            console.log("Please provide a valid number for mileage.");
        }
    },

   
    checkIfNew() {
        const currentYear = new Date().getFullYear();
        this.isNew = currentYear - this.releaseYear <= 1;
        console.log(`Is the car new? ${this.isNew}`);
    },

    
    changeColor(newColor) {
        this.color = newColor;
        console.log(`Car color changed to ${this.color}.`);
    }
};


console.log("Original Car Details:");
console.log(Car);

Car.updateMileage(20000); 
Car.checkIfNew(); 

Car.changeColor("Blue"); 
console.log("Updated Car Details:");
console.log(Car);

