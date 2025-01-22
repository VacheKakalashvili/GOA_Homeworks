class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      console.log("Engine started");
    }
  
    stopEngine() {
      console.log("Engine stopped");
    }
  }
  
  // Example usage:
  const car1 = new Car("Toyota", "Camry", 2020);
  const car2 = new Car("Honda", "Civic", 2021);
  
  car1.startEngine();
  car1.stopEngine();
  
  car2.startEngine();
  car2.stopEngine();
  