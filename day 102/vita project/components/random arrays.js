// Random Array of Numbers
const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log("Random Numbers Array:", randomNumbers);

// Random Array of Strings
const randomStrings = Array.from({ length: 5 }, () => Math.random().toString(36).substring(2, 7));
console.log("Random Strings Array:", randomStrings);

// Random Array of Mixed Data Types
const mixedArray = [
    Math.floor(Math.random() * 100), // Random number
    "Hello",                          // String
    true,                             // Boolean
    { id: 1, name: "Vache Kakalashvili" },     // Object
    Math.random(),                   // Another random number
    null,                             // Null value
];
console.log("Mixed Data Types Array:", mixedArray);

const randomObjects = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    value: Math.random() * 100
}));
console.log("Random Objects Array:", randomObjects);
