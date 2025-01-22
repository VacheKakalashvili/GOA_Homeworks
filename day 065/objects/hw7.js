const currentYear = new Date().getFullYear();
car.yearManufactured = 2015;

car.getCarAge = function() {
    return currentYear - car.yearManufactured;
};

console.log(`Car Age: ${car.getCarAge()} years`);
