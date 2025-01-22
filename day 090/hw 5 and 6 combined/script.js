// Destroy the person object
let person = {
    firstName: "Vache",
    lastName: "Kakalashvili",
    age: 14,
    gender: "Male",
    address: {
        street: "T.Tabidze 74",
        city: "Tbilisi",
        country: "Georgia"
    }
};

let destroyPerson = null;
person = destroyPerson;

console.log(person);

// Destructuring an array
let fruits = ["apple", "banana", "cherry"];

let [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// Optionally: Removing elements from the array
let removeElements = fruits.splice(0, fruits.length);

console.log(fruits);
console.log(removeElements);
