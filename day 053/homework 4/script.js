const carInfo = {
    brand: "Bugatti",
    model: "Chiron",
    year: 2022,
    color: "Black",
    engine: "W16",
    summarizeInfo: function() {
        return `This is a ${this.year} ${this.brand} ${this.model} in ${this.color} color with a ${this.engine} engine.`;
    }
};

console.log(carInfo.summarizeInfo());
