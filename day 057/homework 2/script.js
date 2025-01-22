const myObject = {
    object1: {
        name: "Vache",
        age: 13,
        city: "Tbilisi"
    },
    object2: {
        name: "Luka",
        age: 25,
        city: "Tbilisi"
    }
};

console.log("Initial State:");
console.log("Object 1:", myObject.object1);
console.log("Object 2:", myObject.object2);

myObject.object1.age = 14;
myObject.object2.age = 15;

console.log("\nUpdated State:");
console.log("Object 1:", myObject.object1);
console.log("Object 2:", myObject.object2);
